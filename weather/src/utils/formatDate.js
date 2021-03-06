const formatDate = num => {
    const date = new Date(num);
    const day = date.getDate();
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayIndex = date.getDay();
    const dayName = days[dayIndex];
    const monthIndex = date.getMonth();
    const monthName = months[monthIndex];
    const fullDate = `${dayName}, ${monthName} ${day}`;
    return fullDate;
};

export default formatDate;
