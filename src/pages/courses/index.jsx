import { useGetCoursesHook } from "../../features/courses/hooks"

import CourseCard from "../../components/courses/course-card";

import {
    Title,
    Section,
    CoursesCardsContainer
} from "./styles";

function Courses() {
    const { courses, isLoading } = useGetCoursesHook();

    return (
        <Section>
            <Title>
                Cursuri
            </Title>
            {
                isLoading ? (
                    <div>
                        Loading...
                    </div>
                ) : (
                    <CoursesCardsContainer>
                        {
                            courses && courses.map(({ id, name, uploadedBy }) => (
                                <CourseCard
                                    key={id}
                                    id={id}
                                    name={name}
                                    uploadedBy={uploadedBy}
                                />
                            ))
                        }
                    </CoursesCardsContainer>
                )
            }

        </Section>
    )
}

export default Courses;