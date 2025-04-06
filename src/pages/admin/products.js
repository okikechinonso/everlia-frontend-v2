import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import AdminLayout from "@component/admin/AdminLayout";
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus, AiOutlineAppstoreAdd, AiOutlineClose } from "react-icons/ai";


const dummyProducts = [
  {
    productId: "P001",
    title: { en: "Strawberries Package" },
    description: { en: "Fresh strawberries, high in vitamins and minerals." },
    prices: { originalPrice: 200, price: 180, discount: 20 },
    stock: 500,
    categories: [{ name: { en: "Fresh Fruits" } }],
    image: ["https://i.postimg.cc/FstZ49qv/Strawberries-Package-2-25-oz.jpg"],
    variants: [
      { price: 180, originalPrice: 200, quantity: 50, discount: 20 },
      { price: 150, originalPrice: 180, quantity: 30, discount: 15 }
    ],
    createdAt: "2023-04-23"
  },
  {
    productId: "P002",
    title: { en: "Fresh Oranges" },
    description: { en: "Juicy and sweet oranges, full of vitamin C." },
    prices: { originalPrice: 150, price: 130, discount: 20 },
    stock: 400,
    categories: [{ name: { en: "Citrus Fruits" } }],
    image: ["https://i.postimg.cc/d3v4gNyk/oranges.jpg"],
    variants: [
      { price: 130, originalPrice: 150, quantity: 40, discount: 20 }
    ],
    createdAt: "2023-05-10"
  }
];

const Products = () => {
  const [products, setProducts] = useState(dummyProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { register, handleSubmit, setValue, reset, control } = useForm({
    defaultValues: { title: "", description: "", price: "", originalPrice: "", discount: "", stock: "", category: "", variants: [] }
  });

  const { fields, append, remove } = useFieldArray({ control, name: "variants" });

  useEffect(() => {
    if (selectedProduct) {
      setValue("title", selectedProduct.title.en);
      setValue("description", selectedProduct.description.en);
      setValue("price", selectedProduct.prices.price);
      setValue("originalPrice", selectedProduct.prices.originalPrice);
      setValue("discount", selectedProduct.prices.discount);
      setValue("stock", selectedProduct.stock);
      setValue("category", selectedProduct.categories.map((c) => c.name.en).join(", "));
      reset({ variants: selectedProduct.variants || [] });
    }
  }, [selectedProduct, setValue, reset]);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.productId !== id));
  };

  const onSubmit = (data) => {
    if (selectedProduct) {
      const updatedProducts = products.map((p) =>
        p.productId === selectedProduct.productId ? { ...selectedProduct, ...data } : p
      );
      setProducts(updatedProducts);
      alert("Product updated successfully!");
    } else {
      const newProduct = {
        productId: `P00${products.length + 1}`,
        title: { en: data.title },
        description: { en: data.description },
        prices: { originalPrice: data.originalPrice, price: data.price, discount: data.discount },
        stock: data.stock,
        categories: [{ name: { en: data.category } }],
        image: ["https://i.postimg.cc/FstZ49qv/Strawberries-Package-2-25-oz.jpg"],
        variants: data.variants,
        createdAt: new Date().toISOString()
      };
      setProducts([...products, newProduct]);
      alert("New product added!");
    }
    reset();
    setSelectedProduct(null);
  };

  return (
    <AdminLayout>
      <div className="flex min-h-screen bg-gray-100 p-6 space-x-6">
        {/* Left: Product Table */}
        <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">📦 Product List</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-indigo-100 text-gray-700">
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Stock</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.productId} className="hover:bg-indigo-50 border-b border-gray-300">
                  <td className="p-3 font-medium text-gray-700">{product.title.en}</td>
                  <td className="p-3 text-gray-600">${product.prices.price}</td>
                  <td className="p-3 text-gray-600">{product.stock}</td>
                  <td className="p-3 flex space-x-2">
                    <button className="bg-indigo-600 text-white px-3 py-1 rounded-md flex items-center hover:bg-indigo-700"
                      onClick={() => handleSelectProduct(product)}>
                      <AiOutlineEdit className="w-5 h-5 mr-1" />
                      Edit
                    </button>
                    <button className="bg-red-600 text-white px-3 py-1 rounded-md flex items-center hover:bg-red-700"
                      onClick={() => handleDeleteProduct(product.productId)}>
                      <AiOutlineDelete className="w-5 h-5 mr-1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right: Add Product Form */}
        {/* <div className="w-1/3 bg-white p-6 rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-2xl font-semibold mb-4">{selectedProduct ? "✏️ Edit Product" : "➕ Add Product"}</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="block font-medium">Title</label>
            <input className="border w-full p-2 rounded-md mb-3" {...register("title")} />

            <button type="button" className="bg-green-500 text-white w-full p-2 flex items-center justify-center mb-3 rounded-md hover:bg-green-600"
              onClick={() => append({ price: "", originalPrice: "", quantity: "", discount: "" })}>
              <AiOutlinePlus className="mr-2" />
              Add Variant
            </button>

            {fields.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-2 mb-2">
                <input className="border p-2 rounded-md" placeholder="Price" {...register(`variants.${index}.price`)} />
                <input className="border p-2 rounded-md" placeholder="Original Price" {...register(`variants.${index}.originalPrice`)} />
                <input className="border p-2 rounded-md" placeholder="Quantity" {...register(`variants.${index}.quantity`)} />
                <button type="button" className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                  onClick={() => remove(index)}>
                  <AiOutlineClose />
                </button>
              </div>
            ))}

            <button type="submit" className="bg-indigo-600 text-white w-full p-2 rounded-md hover:bg-indigo-700">
              {selectedProduct ? "Edit Product" : "Add Product"}
            </button>
          </form>
        </div> */}
      </div>
    </AdminLayout>
  );
};

export default Products;
