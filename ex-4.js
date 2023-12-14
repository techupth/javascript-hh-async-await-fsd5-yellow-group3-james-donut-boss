// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

// Start coding here
async function resultJohnProfile() {
  const dataJohnProfile = await getJohnProfile()
  console.log (dataJohnProfile)
}
resultJohnProfile()