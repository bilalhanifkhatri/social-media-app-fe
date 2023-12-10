import { Modal } from "@mantine/core";
import React from "react";
import PostShare from "../postShare/PostShare";

const ShareModal = ({ opened, setOpened }) => {
  return (
    <>
      <Modal opened={opened} size={"lg"} onClose={() => setOpened(false)}>
        <PostShare />
      </Modal>
    </>
  );
};

export default ShareModal;
