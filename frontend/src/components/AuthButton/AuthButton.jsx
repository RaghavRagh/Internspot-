const AuthButton = ({ data }) => {
  return (
    <div>
      <button className="text-white bg-sky-400 font-medium text-md p-2 px-3 rounded-md">
        {data}
      </button>
    </div>
  );
};

export default AuthButton;
