<template>
	<div
		id="blurDiv"
		class="items-center transition-all z-10 top-0 fixed w-[100vw] p-0 m-0 h-28 mx-auto flex bg-sky-950 space-x-9 text-2xl text-white justify-center">
		<img
			src="https://www.mompoppokesushi.com/cdn/shop/products/Round_logo.png?v=1666186929&width=1024"
			class="h-48 w-48 relative top-9" />
		<NuxtLink to="/menu">Меню</NuxtLink>
		<span>•</span>
		<NuxtLink to="/delivery">Доставка</NuxtLink>
		<span>•</span>
		<NuxtLink to="/sales">Акции</NuxtLink>
		<span class="read-only">•</span>
		<NuxtLink to="/reviews">Отзывы</NuxtLink>
		<span>•</span>
		<NuxtLink to="/contacts">Контакты</NuxtLink>
		<span>+7 979 700 97 91</span>

		<button
			class="bg-white h-12 w-12 rounded-full p-2"
			@click="changeColor">
			<img
				src="../public/shopping-bag.png"
				alt="shopping-bag" />
		</button>
		<NuxtLink
			class="bg-white text-black h-12 rounded-3xl flex items-center gap-x-10 w-24 justify-center"
			to="/login"
			>Войти</NuxtLink
		>
	</div>
	<div id="blurDiv">
		<h1
			class="text-6xl text-center text-orange-950 mt-28 p-14 tracking-tighter">
			• Меню •
		</h1>
	</div>

	<div
		id="blurDiv"
		class="flex w-[75%] m-auto flex-row space-x-10 justify-center text-2xl mt-10 mb-10">
		<NuxtLink
			to="/rolls"
			class="focus:bg-stone-900 border-[1px] focus:text-white hover:bg-gray-100 bg-white text-center transition-colors ease-in duration-150 h-16 w-64 rounded-full py-4 px-2">
			РОЛЛЫ
		</NuxtLink>
		<NuxtLink
			to="/sushi"
			class="focus:bg-stone-900 focus:text-white border-[1px] hover:bg-gray-100 bg-white text-center transition-colors ease-in duration-150 h-16 w-[28rem] rounded-full py-4 px-2">
			СУШИ И ГУНКАНЫ
		</NuxtLink>
		<NuxtLink
			to="sets"
			class="focus:bg-stone-900 focus:text-white border-[1px] hover:bg-gray-100 bg-white text-center transition-colors ease-in duration-150 h-16 w-64 hover:text-black rounded-full py-4 px-2">
			СЕТЫ
		</NuxtLink>
		<NuxtLink
			to="/noodles_rice"
			class="focus:bg-stone-900 focus:text-white border-[1px] hover:bg-gray-100 bg-white text-center transition-colors ease-in duration-150 h-16 w-80 hover:text-black rounded-full py-4 px-2">
			ЛАПША И РИС
		</NuxtLink>
		<NuxtLink
			to="/salads"
			class="focus:bg-stone-900 focus:text-white border-[1px] hover:bg-gray-100 bg-white text-center transition-colors ease-in duration-150 h-16 w-64 hover:text-black rounded-full py-4 px-2">
			САЛАТЫ
		</NuxtLink>
		<NuxtLink
			to="/hot_dishes"
			class="focus:bg-stone-900 focus:text-white border-[1px] hover:bg-gray-100 bg-white text-center transition-colors ease-in duration-150 h-16 min-w-80 hover:text-black rounded-full py-4 px-2">
			ГОРЯЧИЕ БЛЮДА
		</NuxtLink>
	</div>
	<div
		class="h-[100vh] pl-10 flex-col flex z-20 w-[800px] bg-[#ebe1d7] fixed top-0 right-[-800px] transition-transform: ease-out duration-200"
		id="container"
		className="container">
		<h1 class="text-5xl text-center pt-16">КОРЗИНА</h1>
		<div class="mt-14 overflow-y-auto max-h-[500px]">
			<div
				v-for="(item, index) in order"
				:key="index"
				class="w-[90%] flex gap-4 h-44 mb-8 bg-white">
				<div class="w-[27%]">
					<img
						class="float-left"
						:src="item.image"
						alt="foodItem" />
				</div>
				<div class="w-[38%]">
					<h2 class="text-xl ml-2 mt-6 uppercase">{{ item.label }}</h2>
					<p class="ml-2">{{ item.ingredients }}</p>
					<p class="ml-2 text-gray">{{ item.weight }}</p>
				</div>
				<div class="w-[20%]">
					<h3 class="mt-5 text-lg">
						Цена: <span class="font-bold">{{ item.price }}</span
						>₽
					</h3>
					<button
						@click="() => minus(item)"
						class="w-8 h-8 mt-6 text-white bg-red-950 hover:bg-[#100301] rounded-full">
						-
					</button>
					<span
						class="ml-2 mr-2 mt-6 font-bold"
						id="counter"
						>{{ item.counter }}</span
					>
					<button
						@click="() => plus(item)"
						class="w-8 h-8 mt-6 text-white hover:bg-[#100301] bg-red-950 rounded-full">
						+
					</button>
					<h3 class="mt-5 text-lg">Сумма: {{ item.summary }} ₽</h3>
				</div>
				<div class="15% flex">
					<button
						class="float-right text-center h-10 items-center"
						@click="() => removeSushi(item.id)">
						Удалить
					</button>
				</div>
			</div>
		</div>
		<div class="bottom-0 absolute mb-16 text-black">
			<p class="text-xl mb-9">Общая сумма: {{ wholeSum }}</p>
			<p class="mb-9">
				Сумма заказа для доставки курьером должна соствлять не менее 500р
			</p>
			<button
				class="bg-white hover:bg-gray-50 h-14 text-lg shadow-2xl border-black rounded-md w-60"
				type="button"
				@click="returnToShop">
				Вернуться к покупкам
			</button>
			<button
				@click="applyOrder"
				type="button"
				class="ml-20 rounded-lg hover:bg-[#100301] transition-colors 300ms ease-in bg-orange-950 h-14 w-44 text-white">
				Оформить заказ
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { order } from '../arrays/order';
	import type Sushi from '~/arrays/sushi';
	const toggleDisable: Ref<boolean> = ref(false);

	function changeColor() {
		const elem = document.getElementById('container');
		const blurElem = document.querySelectorAll<HTMLElement>('#blurDiv');
		const blurButton = document.getElementById(
			'blurButton'
		) as HTMLButtonElement;

		toggleDisable.value = !toggleDisable.value;

		if (blurButton !== null && toggleDisable.value === true) {
			blurButton.disabled = true;
		}

		if (blurElem !== null) {
			blurElem.forEach((blurItem) => {
				blurItem.style.filter = 'blur(7px)';
			});
		}
		if (elem !== null) {
			elem.style.right = '0px';
		}
	}

	function returnToShop() {
		const elem = document.getElementById('container');
		const blurElem = document.querySelectorAll<HTMLElement>('#blurDiv');

		if (elem !== null) {
			elem.style.right = '-800px';
			blurElem.forEach((blurItem) => {
				blurItem.style.filter = 'none';
			});
		}
	}

	function removeSushi(id: string) {
		const result = order.value.filter((item) => item.id !== id);
		order.value = result;
	}

	function plus(item: Sushi) {
		item.counter += 1;
		item.summary = item.price * item.counter;
	}
	function minus(item: Sushi) {
		if (item.counter > 1) {
			item.counter -= 1;
			item.summary = item.price * item.counter;
		}
	}
	const acc: Ref<number> = ref(0);

	const wholeSum = computed(() =>
		order.value.reduce((prev, cur) => {
			return (prev += cur.summary);
		}, acc.value)
	);
	acc.value = wholeSum.value;

	function applyOrder() {
		order.value = [];
	}
</script>
<script></script>
<style scoped></style>
