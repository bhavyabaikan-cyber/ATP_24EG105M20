function UserCard({ user }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition">

      <img
        src={user.image}
        alt={user.name}
        className="w-20 h-20 mx-auto rounded-full mb-4"
      />

      <h2 className="font-semibold text-lg">{user.name}</h2>

      <p className="text-gray-500 text-sm mt-2">
        {user.email}
      </p>

    </div>
  );
}

export default UserCard;