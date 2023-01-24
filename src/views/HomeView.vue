<template>
  <div class="home">
    <h2>Rubrik</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptas sunt vel quibusdam
      quam voluptatem eius in veniam reiciendis ducimus. Cupiditate animi dolore voluptas blanditiis
      praesentium vel error fugit ex facere, totam temporibus corporis pariatur quasi mollitia
      recusandae delectus deleniti, obcaecati, explicabo reiciendis quisquam nobis qui! Natus
      impedit consectetur corrupti?
    </p>
    <MainBody />
  </div>
</template>

<script>
// @ is an alias to /src
import MainBody from "@/components/MainBody.vue";

export default {
  name: "HomeView",
  components: {
    MainBody,
  },
};
</script>

<style>
.home {
  margin: 1rem 4rem;
  border: 0 2rem;
  padding: 3rem;
}
</style>
