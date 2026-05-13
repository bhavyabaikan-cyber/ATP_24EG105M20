function Product({ item }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      
      <img
        src={item.image}
        alt={item.title}
        className="h-40 mx-auto object-contain mb-3"
      />

      <h2 className="text-sm font-semibold mb-2 line-clamp-2">
        {item.title}
      </h2>

      <p className="text-green-600 font-bold mb-2">
        ₹ {item.price}
      </p>

      <p className="text-xs text-gray-500 mb-2">
        {item.category}
      </p>

      <p className="text-xs text-gray-600 line-clamp-2">
        {item.description}
      </p>

      <div className="mt-2 text-yellow-500 text-sm">
         {item.rating.rate} ({item.rating.count})
      </div>

    </div>
  );
}

export default Product;