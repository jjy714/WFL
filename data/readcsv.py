import csv

# Open the file with the correct encoding
with open('TB_MENU_TREND-200930_000.csv', newline='', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile)
    # Iterate over each row in the CSV file
    for row in reader:
        # Process each row as needed
        print(row)
