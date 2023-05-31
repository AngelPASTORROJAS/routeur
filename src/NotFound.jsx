const NotFound = () => {
  const customDiv = {
    color:"red",
    background:
    "url('https://error404.fun/img/full-preview/2x/24.png') no-repeat center",
    backgroundSize: "cover",
    height:"100vh",
    width:"100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "end"
  };
  const customP ={
    textAlign:"center",
    fontSize:"3em"
  }

  return (
    <>
      <div style={customDiv}>
        <p style={customP}>
         Cette page n'existe pas !!
        </p>
      </div>
    </>
  );
};

export default NotFound;
