import Bookmark from "../Bookmark/Bookmark";



const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="md:w-1/3 bg-gray-400 ml-6 mt-3 pt-3 rounded-3xl">
      <div className="text-center">
        <h className="text-4xl">Reading Time: {readingTime}</h>
      </div>
      <h2 className="text-3xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
      {
        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
};

export default Bookmarks;