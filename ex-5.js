// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
async function result() {
  try {
    const ans = await getJohnProfile();
    console.log(ans);
  }
  catch (error) {
    console.log(error);
  };
};
result();