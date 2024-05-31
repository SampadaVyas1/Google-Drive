import React, { useContext } from "react";
import styles from "./Sidebar.module.scss";
import { randomFunction } from "../../utils/randomFunction";
import { TYPES } from "../../constants/constants";
import { Context } from "../../context/AppContext";
import { useParams } from "react-router-dom";

const Sidebar = (props: any) => {
  const { setFilterData } = props;
  const { handleData, setData } = useContext(Context);
  const params = useParams();
  const handleFolderDataonClick = () => {
    if (params.id) {
      setData((prev: any) => {
        const updatedPrev = prev || [];

        const targetIndex = updatedPrev.findIndex(
          (item: any) => item?.id === Number(params?.id)
        );

        if (targetIndex === -1) {
          return updatedPrev;
        }

        const targetValue = updatedPrev[targetIndex];

        if (!targetValue.folder) {
          updatedPrev[targetIndex] = {
            ...targetValue,
            folder: [
              {
                id: randomFunction(),
                type: TYPES.FOLDER,
                name: `Folder ${String(randomFunction()).slice(1, 3)}`,
              },
            ],
          };
        } else {
          updatedPrev[targetIndex] = {
            ...targetValue,
            folder: [
              ...targetValue.folder,
              {
                id: randomFunction(),
                type: TYPES.FOLDER,
                name: `Folder ${String(randomFunction()).slice(1, 3)}`,
              },
            ],
          };
        }
        setFilterData(updatedPrev[targetIndex]?.folder);

        return updatedPrev;
      });
    } else {
      handleData({
        id: randomFunction(),
        type: TYPES.FOLDER,
        name: `Folder ${String(randomFunction()).slice(1, 3)}`,
      });
    }
  };

  const handleFileDataOnclick = () => {
    if (params.id) {
      setData((prev: any) => {
        const updatedPrev = prev || [];

        const targetIndex = updatedPrev.findIndex(
          (item: any) => item?.id === Number(params?.id)
        );

        if (targetIndex === -1) {
          return updatedPrev;
        }

        const targetValue = updatedPrev[targetIndex];

        if (!targetValue.folder) {
          updatedPrev[targetIndex] = {
            ...targetValue,
            folder: [
              {
                id: randomFunction(),
                type: TYPES.FILE,
                name: `File ${String(randomFunction()).slice(1, 3)}`,
              },
            ],
          };
        } else {
          updatedPrev[targetIndex] = {
            ...targetValue,
            folder: [
              ...targetValue.folder,
              {
                id: randomFunction(),
                type: TYPES.FILE,
                name: `File ${String(randomFunction()).slice(1, 3)}`,
              },
            ],
          };
        }
        setFilterData(updatedPrev[targetIndex]?.folder);

        return updatedPrev;
      });
    } else {
      handleData({
        id: randomFunction(),
        type: TYPES.FILE,
        name: `File ${String(randomFunction()).slice(1, 3)}`,
      });
    }
  };
  return (
    <div className={styles.SidebarContainer}>
      <div className={styles.sidebarItem}>
        <img
          src="https://i.pinimg.com/474x/37/29/61/3729617452425f23b079bb0de458293a.jpg"
          alt=""
          height={50}
          onClick={handleFolderDataonClick}
        />
        Folder
      </div>
      <div className={styles.sidebarItem}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhhMfklNFNFsxXSn4_zr5ldnvo7-XeFAce0DPW37KEg&s"
          alt=""
          height={50}
          onClick={handleFileDataOnclick}
        />
        File
      </div>
    </div>
  );
};

export default Sidebar;
