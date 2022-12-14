const pool = require("../../config/database");

module.exports = {

    getAllCommunicableDiseaseReported: callBack => {
        pool.query(
            `SELECT * FROM communicable_disease_reporting`,
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                    return callBack(null, results)
            }
        )
    },

    getAllCommunicableDisease: callBack => {
        pool.query(
            `SELECT DISTINCT disease_name FROM communicable_disease_reporting`,
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                    return callBack(null, results)
            }
        )
    },

    getCommunicableDiseaseById: (data, callBack) => {
        pool.query(
            `SELECT * FROM communicable_disease_reporting WHERE id = ?`,
            [
                data.id,
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                    return callBack(null, results)
            }
        )
    },

    getCommunicableDiseaseByName: (data, callBack) => {
        pool.query(
            `SELECT id, user_id, type, disease_name, document_proof_image, createdAt, updatedAt FROM communicable_disease_reporting WHERE disease_name LIKE ?`,
            [
                data.disease_name,
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                    return callBack(null, results)
            }
        )
    },

    updateCommunicableDiseaseCaseStatus: (data, callBack) => {
        pool.query(
            `UPDATE communicable_disease_reporting SET case_status = ? WHERE id = ?`,
            [
                data.case_status,
                data.id
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                    return callBack(null, results)
            }
        )
    },

    deleteCommunicableDisease: (data, callBack) => {
        pool.query(
            `DELETE FROM communicable_disease_reporting WHERE id = ?`,
            [
                data.id
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                    return callBack(null, results)
            }
        )

    },


    getUserVisitedRooms: (data, callBack) => {
        pool.query(
            `SELECT DISTINCT room_id FROM room_visited WHERE user_id = ? AND createdAt BETWEEN ? and ?`,
            [
                data.user_id,
                data.start_date,
                data.end_date
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }

                return callBack(null, results)

            }
        )
    },

    getUsersViaRoomIdAndDate: (data, callBack) => {
        pool.query(
            `SELECT * FROM room_visited WHERE room_id = ? AND createdAt BETWEEN ? and ?`,
            [
                data.room_id,
                data.start_date,
                data.end_date
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }

                return callBack(null, results)

            }
        )
    },

    getStudentDetailsById: (id, callBack) => {
        pool.query(
            `SELECT * FROM student_details WHERE user_id = ?`,
            [
                id
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error)
                }
                    return callBack(null, results[0]);
            }
        )
    },

    getVisitorDetailsById: (id, callBack) => {
        pool.query(
            `SELECT * FROM visitor_details WHERE user_id = ?`,
            [
                id
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error)
                }
                return callBack(null, results[0]);
            }
        )
    },
    
    getEmployeeDetailsById: (id, callBack) => {
        pool.query(
            `SELECT * FROM employee_details WHERE user_id = ?`,
            [
                id
            ],
            
            (error, results, fields) => {
                if(error){
                    return callBack(error)
                }
                    return callBack(null, results[0]);
            }
        )
    },
    getCommunicableDiseaseByStatus: (data, callBack) => {
        pool.query(
            `SELECT * FROM communicable_disease_reporting WHERE case_status = ? ORDER BY updatedAt DESC`,
            [
                data.case_status
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                    return callBack(null, results)
            }
        )
    },
    
};