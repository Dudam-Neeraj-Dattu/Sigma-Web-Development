// filepath: src/hooks/usePasswordActions.js
import { useDispatch } from "react-redux";
import { startEdit, deletePassword } from "../redux/passwordSlice";
import { toast } from "react-toastify";

const PasswordActions = () => {
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    dispatch(startEdit(id));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this password?")) {
      dispatch(deletePassword(id));
    }
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Text copied to clipboard");
    } catch (err) {
      toast.error("Failed to copy text: ", err);
    }
  };

  const formatURL = (url) => {
    if (!/^https?:\/\//i.test(url)) {
      return `https://${url}`;
    }
    return url;
  };

  return { handleEdit, handleDelete, handleCopy, formatURL };
};

export default PasswordActions;