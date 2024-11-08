<template>
    <div id="app">
        <q-layout view="hHh lpR fFf">
            <q-header elevated class="bg-primary text-white">
                <q-toolbar>
                    <q-btn
                        flat
                        round
                        dense
                        icon="menu"
                        aria-label="Menu"
                        class="q-pa-none q-mr-md lg:hidden"
                        @click="drawer = !drawer"
                    ></q-btn>

                    <q-toolbar-title>
                        <span class="text-h5 italic">datRooster</span>
                    </q-toolbar-title>

                    <div class="row items-center q-gutter-sm q-mr-md desktop-nav">
                        <q-btn flat unelevated to="/" label="Home" class="text-white" />
                        <q-btn flat unelevated to="/services" label="Services" class="text-white" />

                    </div>

                    <q-btn flat icon="account_circle" label="Login" class="text-white" @click="openLoginDialog" />
                </q-toolbar>
            </q-header>

            <q-drawer
                v-model="drawer"
                side="left"
                class="bg-primary text-white"
                :show-if-above="false"
            >
                <q-list>
                    <q-item clickable v-ripple to="/">
                        <q-item-section class="text-cyan-50">Home</q-item-section>
                    </q-item>
                </q-list>
            </q-drawer>

            <q-dialog v-model="showLoginDialog" persistent transition-show="scale" transition-hide="scale">
                <q-card class="bg-white q-pa-md rounded-borders shadow-10">
                    <q-card-section class="row items-center justify-center q-pb-md">
                        <span class="text-h5 text-primary">Accedi al tuo account</span>
                    </q-card-section>

                    <q-card-section>
                        <q-input
                            filled
                            v-model="username"
                            label="Username"
                            prepend-icon="person"
                            class="q-mb-md"
                            dense
                        />
                        <q-input
                            filled
                            v-model="password"
                            type="password"
                            label="Password"
                            prepend-icon="lock"
                            class="q-mb-md"
                            dense
                        />
                    </q-card-section>

                    <q-card-actions align="right" class="q-pt-none">
                        <q-btn flat label="Annulla" color="negative" @click="showLoginDialog = false" />
                        <q-btn flat label="Accedi" color="primary" @click="login" />
                    </q-card-actions>
                </q-card>
            </q-dialog>

            <q-page-container>
                <router-view></router-view>
            </q-page-container>
        </q-layout>
    </div>
</template>

<script>
import { QLayout, QHeader, QToolbar, QToolbarTitle, QBtn, QPageContainer, QDrawer, QList, QItem, QItemSection, QDialog, QCard, QCardSection, QCardActions, QInput } from 'quasar';

export default {
    name: 'App',
    components: {
        QLayout,
        QHeader,
        QToolbar,
        QToolbarTitle,
        QBtn,
        QPageContainer,
        QDrawer,
        QList,
        QItem,
        QItemSection,
        QDialog,
        QCard,
        QCardSection,
        QCardActions,
        QInput,
    },
    data() {
        return {
            drawer: false,
            showLoginDialog: false,
            username: '',
            password: '',
        };
    },
    methods: {
        openLoginDialog() {
            console.log("Opening Login Dialog");
            this.showLoginDialog = true;
        },
        login() {
            console.log('Username:', this.username);
            console.log('Password:', this.password);
            this.showLoginDialog = false;
        },
    },
};
</script>

<style>
.q-toolbar {
    padding-left: 16px;
    padding-right: 16px;
}

.rounded-borders {
    border-radius: 12px;
}

.shadow-10 {
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
}

.desktop-nav {
    display: none;
}

@media (min-width: 1024px) {
    .desktop-nav {
        display: flex;
    }
}
</style>