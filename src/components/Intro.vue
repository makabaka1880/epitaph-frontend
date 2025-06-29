<template>
	<div id="intro" class="introduction-box padding-v padding-h responsive-hstack">
        <div class="intro-heading-box">
            <h2>李璟的电子墓碑</h2>
            <i>James Li's Digital Epitaph</i>
        </div>
		<ul>
			<li><RouterLink to="/dev" class="link-main">生平 Lifetime -></RouterLink></li>
			<li><RouterLink to="/message" class="link-main">寄语 Messages -></RouterLink></li>
			<li><RouterLink to="/dev" class="link-main">记忆 Memories -></RouterLink></li>
		</ul>
	</div>
</template>
<script setup lang="js">
</script>
<style scoped>
@import url('@/style.css');
.responsive-hstack {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.intro-heading-box {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
@media screen and (max-aspect-ratio: 1.2) {
    .responsive-hstack {
        flex-direction: column;
    }
    .intro-heading-box {
        align-items: flex-start;
    }
}
.link-main {
    text-wrap: none;
}
</style>