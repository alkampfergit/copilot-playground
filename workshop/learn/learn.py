matrix = [["apple", "banana", "cherry"],
		["date", "fig", "grape"],
		["kiwi", "lemon", "mango"]]

modified_matrix = [[fruit.capitalize() for fruit in row] for row in matrix]

print(modified_matrix)
