<script>
import dataSample from '@/data-mock.json'

export default {
  data() {
    return {
      courses: dataSample.courses,
    }
  },
}
</script>

<template class="catalogue">
  <h1>I'm the catalogue Page</h1>

  <h2>All Courses</h2>



  <div class="courses">
    <div v-for="course in courses" :key="course.id" class="course-item"> 

        <RouterLink :to="`/course/` + course.slug"> 
            
        <h3>{{ course.title }}</h3>
        </RouterLink>
        <p>{{ course.description }}</p>
        <p>Durée : {{ course.duration }}</p>
        <p> Niveau : {{ course.level }}</p>


    </div>

  </div>
</template>
