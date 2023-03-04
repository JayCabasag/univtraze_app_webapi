const {addRoom, getAllRooms, addVisitedRoom, searchRoomNumber, userVisitedRooms, addUserNotification, userTodaysTemperature, searchUsersByRoomId, userTemperatureHistory} = require("./room.controller")
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validator")

router.post("/addRoom", checkToken, addRoom)
router.get("/allRooms", checkToken, getAllRooms)
router.post("/visited-room", checkToken, addVisitedRoom)
router.post("/searchRoom", checkToken, searchRoomNumber)
router.post("/searchUsersByRoomId", checkToken, searchUsersByRoomId)
router.post("/userVisitedRooms", checkToken, userVisitedRooms)
router.get("/temperature-history/:id", checkToken, userTemperatureHistory)
router.get("/user-temperature/:id", checkToken, userTodaysTemperature)

searchUsersByRoomId
// router.post("/addUserNotification", checkToken, addUserNotification)


module.exports = router;