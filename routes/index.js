//get routes from folder and export

module.exports = router => {
	require("./messages")(router);
	require("./users")(router);
};
