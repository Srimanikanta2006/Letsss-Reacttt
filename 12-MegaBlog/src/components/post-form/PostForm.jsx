import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        content: post?.content || "",
        slug: post?.slug || "",
        status: post?.status || "active",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      //   here dbPost is the updated post returned from the server after updating the post with the new data and featured image. We can use this dbPost to update our local state or navigate to the post detail page, etc. depending on your application's flow.
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
      // So here, if the post is being edited and a new image is uploaded, we first upload the new image and get its file ID. Then we delete the old featured image using its file ID. After that, we update the post with the new data and the new featured image's file ID. Finally, we navigate to the updated post's detail page using its ID.
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;

        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };
  return <div>PostForm</div>;
}

export default PostForm;
