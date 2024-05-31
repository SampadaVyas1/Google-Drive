import { useState } from "react";

import { TYPES } from "../../constants/constants";
import Sidebar from "../../component/Sidebar/Sidebar";
import styles from "./FolderPage.module.scss";

const FolderPage = () => {
  const [filterdata, setFilterData] = useState([]);

  const renderFolderStructure = (item: any) => {
    const renderImage =
      item.type === TYPES.FOLDER ? (
        <img
          src="https://i.pinimg.com/474x/37/29/61/3729617452425f23b079bb0de458293a.jpg"
          alt=""
          height={50}
          // onClick={() => handleFolderIconclick(item.id)}
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
    return renderImage;
  };

  return (
    <div className={styles.container}>
      <Sidebar setFilterData={setFilterData} />
      <div className={styles.subContainer}>
        {filterdata?.map((item: any) => {
          return (
            <>
              {renderFolderStructure(item)}
              {item.name}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FolderPage;
