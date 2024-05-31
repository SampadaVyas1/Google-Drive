import styles from "./Home.module.scss";
import { TYPES } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/AppContext";
import UploadFile from "../../component/UploadFile/UploadFile";
import Sidebar from "../../component/Sidebar/Sidebar";

const Home = () => {
  const { data } = useContext(Context);
  const navigate = useNavigate();

  const handleFolderIconclick = (id: number) => {
    navigate(`/folder/${id}`);
  };
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.folderStructure}>
          {/* <UploadFile /> */}
          <Sidebar />
          {data.map((item) => {
            const imageRender =
              item.type === TYPES.FOLDER ? (
                <img
                  src="https://i.pinimg.com/474x/37/29/61/3729617452425f23b079bb0de458293a.jpg"
                  alt=""
                  height={50}
                  onClick={() => handleFolderIconclick(item.id)}
                  className={styles.folderContainer}
                />
              ) : (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhhMfklNFNFsxXSn4_zr5ldnvo7-XeFAce0DPW37KEg&s"
                  alt=""
                  height={50}
                  // onClick={handleFileDataOnclick}
                  className={styles.folderContainer}
                />
              );
            return (
              <div className={styles.renderFolderContainer}>
                {imageRender}
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
