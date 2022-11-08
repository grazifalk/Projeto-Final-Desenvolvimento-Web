import React from "react";
import CourseCard from "../CourseCard";

import { courses } from "../../database";
const Couses = () => {
    return(
        <main>
            <section className="courses-section">
                {courses.map((course, index) => (
                    <CourseCard 
                    key={index}
                    img={cours.img} 
                    title={course.title} 
                    price={course.price}
                    />
                ))}
            </section>
        </main>
    );
};

export default Couses;