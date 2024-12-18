import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  // Validation Schema
  const productSchema = Yup.object({
    name: Yup.string().required('Product name is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    setProducts([...products, values]);  // Here, you would send it to backend
    alert('Product added!');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>
      
      <Formik
        initialValues={{ name: '', price: '' }}
        validationSchema={productSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mb-4">
          <div>
            <label className="block text-sm font-medium">Product Name</label>
            <Field
              name="name"
              type="text"
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium">Price</label>
            <Field
              name="price"
              type="number"
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <button type="submit" className="mt-4 bg-blue-600 text-white p-2 rounded">
            Add Product
          </button>
        </Form>
      </Formik>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Product List</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index} className="p-2 border-b">
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductManagement;