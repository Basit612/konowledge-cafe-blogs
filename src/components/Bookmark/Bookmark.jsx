

const Bookmark = ({bookmark}) => {
  const {title} = bookmark;
  return (
    <div className=" bg-slate-300 p-4 m-4 rounded-3xl">
       <h3 className="text-2xl">{title}</h3>
    </div>
  );
};

export default Bookmark;