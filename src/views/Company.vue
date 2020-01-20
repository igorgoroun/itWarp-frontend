<template>
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Мои
                </h1>
                <h2 class="subtitle">
                    Доступные компании
                </h2>
                <CompanyList/>
            </div>
        </div>
    </section>
</template>

<script>
// @ is an alias to /src
//import Test01 from '@/components/Test01.vue'
import CompanyList from '@/components/company/CompanyList.vue'

export default {
  name: 'Company',
  components: {
    CompanyList
  }
}
</script>
