import { LineChart as LChart, Line, XAxis,YAxis } from 'recharts';

const LineChart = () => {
    
    const mathMarksData = [
        { id: 1, name: "John", math_marks: 85, physics_marks: 78, chemistry_marks: 90 },
        { id: 2, name: "Emily", math_marks: 78, physics_marks: 82, chemistry_marks: 85 },
        { id: 3, name: "Michael", math_marks: 92, physics_marks: 88, chemistry_marks: 95 },
        { id: 4, name: "Sophia", math_marks: 70, physics_marks: 75, chemistry_marks: 68 },
        { id: 5, name: "Daniel", math_marks: 88, physics_marks: 90, chemistry_marks: 86 },
        { id: 6, name: "Olivia", math_marks: 82, physics_marks: 85, chemistry_marks: 80 },
        { id: 7, name: "William", math_marks: 76, physics_marks: 80, chemistry_marks: 72 },
        { id: 8, name: "Isabella", math_marks: 90, physics_marks: 92, chemistry_marks: 88 },
        { id: 9, name: "James", math_marks: 84, physics_marks: 86, chemistry_marks: 82 },
        { id: 10, name: "Ava", math_marks: 79, physics_marks: 81, chemistry_marks: 75 }
      ];
      
    return (
        <div>
            <LChart width={800} height={400} data={mathMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math_marks" stroke='blue'></Line>
                <Line dataKey="physics_marks" stroke='green'></Line>
                <Line dataKey="chemistry_marks" stroke='white'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;