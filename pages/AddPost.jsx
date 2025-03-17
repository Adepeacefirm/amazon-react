import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const emptyForm = {
    title: "",
    body: "",
  };
  const [formData, setFormData] = useState(emptyForm);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3500/post/addpost", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setFormData(emptyForm);
      console.log(data);
      const navigatewithTimer = setTimeout(() => {
        navigate("/");
      }, 2000);
      if (response.ok) {
        toast.success(data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Add title"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="body">Body</label>
          <input
            type="text"
            name="body"
            placeholder="Add post body"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add post</button>
      </form>
    </div>
  );
};

export default AddPost;
