USE eCommerce;

-- Users table
CREATE TABLE IF NOT EXISTS  users (
                                      id INT PRIMARY KEY AUTO_INCREMENT,
                                      name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
    );

-- Products table
CREATE TABLE IF NOT EXISTS products (
                                        id INT PRIMARY KEY AUTO_INCREMENT,
                                        name VARCHAR(255),
    description TEXT,
    price DECIMAL(10,2),
    image_url VARCHAR(500)
    );

-- Cart items table
CREATE TABLE IF NOT EXISTS cart_items (
                                          id INT PRIMARY KEY AUTO_INCREMENT,
                                          user_id INT,
                                          product_id INT,
                                          quantity INT,
                                          FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
    );

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
                                      id INT PRIMARY KEY AUTO_INCREMENT,
                                      user_id INT,
                                      date DATE,
                                      total DECIMAL(10,2),
    FOREIGN KEY (user_id) REFERENCES users(id)
    );

-- Order items table
CREATE TABLE IF NOT EXISTS order_items (
                                           id INT PRIMARY KEY AUTO_INCREMENT,
                                           order_id INT,
                                           product_id INT,
                                           quantity INT,
                                           price DECIMAL(10,2),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
    );

-- Views to calculate derived values:

-- View to get order totals (sum of all order_items for each order)
CREATE VIEW order_totals AS
SELECT
    orders.id as order_id,
    COALESCE(SUM(order_items.quantity * products.price), 0) as calculated_total
FROM orders orders
         LEFT JOIN order_items order_items ON orders.id = order_items.order_id
         LEFT JOIN products products ON order_items.product_id = products.id
GROUP BY orders.id;

-- Update orders.total using the order_totals view
UPDATE orders
SET total = (
    SELECT calculated_total
    FROM order_totals
    WHERE order_totals.order_id = orders.id
);