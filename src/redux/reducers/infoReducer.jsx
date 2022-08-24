
//rxreducer
const initialState = {
    infoStudent: {
        'maSV': '',
        'sdt': '',
        'name': '',
        'email': '',
    },
    arrayStudent: [
        {
            'maSV': '1',
            'sdt': '213321',
            'name': 'Ngo A',
            'email': 'ngoA@gamil.com',
        },
        {
            'maSV': '2',
            'sdt': '123213',
            'name': 'Ngo B',
            'email': 'ngoB@gamil.com',
        },
        {
            'maSV': '3',
            'sdt': '123213',
            'name': 'Ngo C',
            'email': 'ngoC@gamil.com',
        },
        {
            'maSV': '4',
            'sdt': '123213',
            'name': 'Ngo D',
            'email': 'ngoD@gamil.com',
        },
    ],
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'HANDLE_CHANGE': {
            let infoStudentUpdate = { ...state.infoStudent };
            infoStudentUpdate[payload.id] = payload.value;
            state.infoStudent = infoStudentUpdate;
            return { ...state }
        }
        case 'HANDLE_SUBMIT': {
            let arrayStudentUpdate = [...state.arrayStudent];
            arrayStudentUpdate.push(payload);
            state.infoStudent={
                'maSV': '',
                'sdt': '',
                'name': '',
                'email': '',
            };;
            state.arrayStudent = arrayStudentUpdate;
            return { ...state }
        }

        case 'EDIT_STUDENT': {
            let infoStudentUpdate = { ...state.infoStudent };
            infoStudentUpdate = state.arrayStudent.find((student) => student.maSV == payload);
            if (infoStudentUpdate) {
                state.infoStudent = infoStudentUpdate;
            }
            return { ...state }
        }

        case 'UPDATE_STUDENT': {
            let arrayStudentUpdate = [...state.arrayStudent];
            arrayStudentUpdate.forEach((student) => {
                if (student.maSV === payload.maSV) {
                    student.email = payload.email;
                    student.name = payload.name;
                    student.sdt = payload.sdt;
                }
                return student;
            })
            state.infoStudent={
                'maSV': '',
                'sdt': '',
                'name': '',
                'email': '',
            };;
            state.arrayStudent = arrayStudentUpdate;
            return { ...state }
        }

        case 'DELETE_STUDENT': {
            let maSV = payload;
            let arrayStudentUpdate=[...state.arrayStudent]
            let arrayStudentNew = arrayStudentUpdate.filter((student) => student.maSV !== maSV);
            state.arrayStudent = arrayStudentNew
            return { ...state }
        }

        default:
            return state
    }
}



