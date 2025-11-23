const students =[ { id: 1, name: "Deman", avatar: "👨‍🎓", status: "online" },
            { id: 2, name: "Ajeng", avatar: "👩‍🎓", status: "online" },
            { id: 3, name: "Alpin", avatar: "👨‍🎓", status: "offline" },
            { id: 4, name: "Anggun", avatar: "👩‍🎓", status: "online" },
            { id: 5, name: "Ica", avatar: "👩‍🎓", status: "online" },
            { id: 6, name: "Azimah", avatar: "👩‍🎓", status: "offline" },
            { id: 7, name: "Zahra", avatar: "👩‍🎓", status: "online" },
            { id: 8, name: "Bagus", avatar: "👨‍🎓", status: "online" },
            { id: 9, name: "Cinta", avatar: "👩‍🎓", status: "offline" },
            { id: 10, name: "Citra", avatar: "👩‍🎓", status: "online" },
            { id: 11, name: "Devina", avatar: "👩‍🎓", status: "online" },
            { id: 12, name: "Devita", avatar: "👩‍🎓", status: "offline" },
            { id: 13, name: "Dimas", avatar: "👨‍🎓", status: "online" },
            { id: 14, name: "Ziban", avatar: "👨‍🎓", status: "online" },
            { id: 15, name: "Fadiyah", avatar: "👩‍🎓", status: "offline" },
            { id: 16, name: "Fany", avatar: "👩‍🎓", status: "online" },
            { id: 17, name: "Febi", avatar: "👩‍🎓", status: "online" },
            { id: 18, name: "Fitri", avatar: "👩‍🎓", status: "offline" },
            { id: 19, name: "Nisa", avatar: "👩‍🎓", status: "online" },
            { id: 20, name: "Man", avatar: "👨‍🎓", status: "online" },
            { id: 21, name: "Mareta", avatar: "👩‍🎓", status: "offline" },
            { id: 22, name: "Farel", avatar: "👨‍🎓", status: "online" },
            { id: 23, name: "Hafidz", avatar: "👨‍🎓", status: "online" },
            { id: 24, name: "Rekhan", avatar: "👨‍🎓", status: "offline" },
            { id: 25, name: "Naysila", avatar: "👩‍🎓", status: "online" },
            { id: 26, name: "Nico", avatar: "👨‍🎓", status: "online" },
            { id: 27, name: "Lisa", avatar: "👩‍🎓", status: "offline" },
            { id: 28, name: "Rahita", avatar: "👩‍🎓", status: "online" },
            { id: 29, name: "Restu", avatar: "👨‍🎓", status: "online" },
            { id: 30, name: "Salsa", avatar: "👩‍🎓", status: "offline" },
            { id: 31, name: "Maul", avatar: "👨‍🎓", status: "online" },
            { id: 32, name: "Syafiq", avatar: "👨‍🎓", status: "online" },
            { id: 33, name: "Anjani", avatar: "👩‍🎓", status: "offline" },
            { id: 34, name: "Zaskia", avatar: "👩‍🎓", status: "online" }
        ]




const newstudents = students.map((value, index) => {
    return ({ id: value.id, name: `<a href="${index + 1}.html" >${value.name}</a>`, avatar: `${value.avatar}`, status: `${value.status}` })
})

console.log(newstudents)