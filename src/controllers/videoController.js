export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) => res.render("home");

export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
