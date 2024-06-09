import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import * as Location from 'expo-location';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import GOOGLE_API_KEY from '../../constants/keys';

const GOOGLE_MAPS_API_KEY = GOOGLE_API_KEY;

const ReferenceLocation = {
  latitude: 37.561685,
  longitude: 127.037080,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const Recommendation = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [region, setRegion] = useState(ReferenceLocation);

  const route = useRoute();
  const foodName = route.params?.foodName;

  useEffect(() => {
    if (foodName) {
      fetchRestaurants(foodName);
    }
  }, [region, foodName]);

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setRegion({
      ...region,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  const fetchRestaurants = async (foodName) => {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${region.latitude},${region.longitude}&radius=1500&type=restaurant&keyword=${foodName}&key=${GOOGLE_MAPS_API_KEY}`;
    try {
      const response = await axios.get(url);
      const results = response.data.results;
      if (Array.isArray(results)) {
        setRestaurants(results);
      } else {
        console.error("Unexpected data format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  const handleCurrentLocationPress = () => {
    getCurrentLocation();
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={region => setRegion(region)}
      >
        {restaurants.map((restaurant, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
            title={restaurant.name}
          />
        ))}
      </MapView>
      <View style={styles.listContainer}>
        <FlatList
          data={restaurants}
          keyExtractor={item => item.place_id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image
                source={{ uri: item.icon }}
                style={styles.itemIcon}
                resizeMode="contain"
              />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemVicinity}>{item.vicinity}</Text>
                {item.rating && (
                  <Text style={styles.itemRating}>Rating: {item.rating}</Text>
                )}
                {item.opening_hours && (
                  <Text style={[styles.itemOpenNow, { color: item.opening_hours.open_now ? 'green' : 'red' }]}>
                    {item.opening_hours.open_now ? 'Open Now' : 'Closed'}
                  </Text>
                )}
              </View>
            </View>
          )}
        />
        <TouchableOpacity style={styles.locationButton} onPress={handleCurrentLocationPress}>
          <Ionicons name="locate" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  ); 
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  listContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    maxHeight: '50%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemVicinity: {
    fontSize: 14,
    color: '#555',
  },
  itemRating: {
    fontSize: 14,
    color: '#777',
  },
  itemOpenNow: {
    fontSize: 14,
  },
  locationButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Recommendation;