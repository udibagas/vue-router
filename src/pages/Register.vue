<template>
  <h1 class="text-xl mb-10">Register</h1>

  <form class="flex flex-col gap-4" @submit.prevent="handleRegister">
    <FetchError v-if="isError" message="Invalid username or password!" />

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
      <label for="email" class="label">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Email"
        class="input"
        v-model="form.email"
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

    <div class="flex flex-col gap-6">
      <button type="submit" class="btn btn-primary w-full">Register</button>
      <p class="text-sm text-center">
        Have account?
        <router-link to="/auth/login">Login</router-link>
      </p>
    </div>
  </form>
</template>

<script setup>
import FetchError from "@/components/FetchError.vue";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
  username: "",
  password: "",
  email: "",
});

const isError = ref("");

function handleRegister() {
  fetch("https://fakestoreapi.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: 0, ...form }),
  })
    .then((res) => res.json())
    .then(() => {
      router.push("/auth/login");
    })
    .catch((err) => {
      isError.value = err.message;
    });
}
</script>
