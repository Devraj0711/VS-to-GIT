const db= require('../util/database');

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    const title = this.title || "Default Title"; // Provide a default value if this.title is undefined
    const imageURL = this.imageURL || "default"; // Use null or a default value as appropriate
    const price = this.price || null; // Use null or a default value as appropriate
    const description = this.description || null; // Use null or a default value as appropriate
  
    return db.execute(
      'INSERT INTO products (title, imageURL, price, description) VALUES (?, ?, ?, ?)',
      [title, imageURL, price, description]
    );
  }
  
  
  
  
  static fetchAll() {
    return db.execute('SELECT * FROM products');
   
  }

  static findById(id)
  {
     db.execute('SELECT * FROM products WHERE products.id=?', [id]);
  }

};
