<template>
    ini halaman user detail {{ $route.params.params }}
    <br>
    <RouterLink :to="'/user/'+ $route.params.params+'/posts'">{{ $route.params.params }}' Posts'</RouterLink>
    <br>
    <RouterLink :to="'/user/'+ $route.params.params+'/profile'">{{ $route.params.params }}' Profile'</RouterLink>
</template>