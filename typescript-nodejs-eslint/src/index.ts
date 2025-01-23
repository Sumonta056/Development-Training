type User = {
  id: number;
  name: string;
  email: string;
};

function updateUser(updatedFields: Required<User>) {
  // Simulate updating user with only the provided fields
  console.log(`Updating user ${updatedFields.id} with:`, updatedFields);
}

updateUser({
  id: 1,
  name: "John Doe",
  email: "sumonta@gmail.com",
}); // Only updating the name
