SET IDENTITY_INSERT [dbo].[Customers] ON 
GO
INSERT [dbo].[Customers] ([CustomerId], Name) VALUES (1, N'Jennifer Acosta')
GO
INSERT [dbo].[Customers] ([CustomerId], Name) VALUES (2, N'Daniel Hecker')
GO
INSERT [dbo].[Customers] ([CustomerId], Name) VALUES (3, N'Kate Smith')
GO
INSERT [dbo].[Customers] ([CustomerId], Name) VALUES (4, N'August Leo')
GO
INSERT [dbo].[Customers] ([CustomerId], Name) VALUES (5, N'Ava Elliot')
GO
INSERT [dbo].[Customers] ([CustomerId], Name) VALUES (6, N'Layla Benn')
GO
SET IDENTITY_INSERT [dbo].[Customers] OFF
GO
SET IDENTITY_INSERT [dbo].[FoodItems] ON 
GO
INSERT [dbo].[FoodItems] ([FoodItemId], Name, [Price]) VALUES (1, N'Chicken Tenders', CAST(3.50 AS Decimal(18, 2)))
GO
INSERT [dbo].[FoodItems] ([FoodItemId], Name, [Price]) VALUES (2, N'Chicken Tenders w/ Fries', CAST(4.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[FoodItems] ([FoodItemId], Name, [Price]) VALUES (3, N'Chicken Tenders w/ Onion', CAST(5.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[FoodItems] ([FoodItemId], Name, [Price]) VALUES (4, N'Grilled Cheese Sandwich', CAST(2.50 AS Decimal(18, 2)))
GO
INSERT [dbo].[FoodItems] ([FoodItemId], Name, [Price]) VALUES (5, N'Grilled Cheese Sandwich w/ Fries', CAST(3.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[FoodItems] ([FoodItemId], Name, [Price]) VALUES (6, N'Grilled Cheese Sandwich w/ Onion', CAST(4.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[FoodItems] ([FoodItemId], Name, [Price]) VALUES (7, N'Lettuce and Tomato Burger', CAST(1.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[FoodItems] ([FoodItemId], Name, [Price]) VALUES (8, N'Soup', CAST(2.50 AS Decimal(18, 2)))
GO
INSERT [dbo].[FoodItems] ([FoodItemId], Name, [Price]) VALUES (9, N'Onion Rings', CAST(2.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[FoodItems] ([FoodItemId], Name, [Price]) VALUES (10, N'Fries', CAST(1.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[FoodItems] ([FoodItemId], Name, [Price]) VALUES (11, N'Sweet Potato Fries', CAST(2.49 AS Decimal(18, 2)))
GO
INSERT [dbo].[FoodItems] ([FoodItemId], Name, [Price]) VALUES (12, N'Sweet Tea', CAST(1.79 AS Decimal(18, 2)))
GO
INSERT [dbo].[FoodItems] ([FoodItemId], Name, [Price]) VALUES (13, N'Botttle Water', CAST(1.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[FoodItems] ([FoodItemId], Name, [Price]) VALUES (14, N'Canned Drinks', CAST(1.00 AS Decimal(18, 2)))
GO
SET IDENTITY_INSERT [dbo].[FoodItems] OFF
GO