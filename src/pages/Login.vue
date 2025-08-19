<template>
  <h1 class="text-xl mb-10">Login</h1>

  <form class="flex flex-col gap-4" @submit.prevent="handleLogin">
    <div class="flex flex-col gap-2">
      <label for="username" class="label">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        class="input"
        v-model="form.username"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="password" class="label">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        class="input"
        v-model="form.password"
      />
    </div>

    <div>
      <button type="submit" class="btn btn-primary">Login</button>
    </div>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// user: johnd
// password: m38rmF$

const form = reactive({
  username: "",
  password: "",
});

function handleLogin() {
  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("token", data.token);
      router.push("/admin");
    })
    .catch((err) => {
      console.error(err.message);
    });
}
</script>
