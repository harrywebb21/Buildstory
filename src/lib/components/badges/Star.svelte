<script>
</script>

<div class="badge-border px-2">
	<div class="stars">
		<img src="star.png" alt="stars" />
	</div>
	<img class="icon" src="star.png" alt="Star Badge" />
	<div class="glow-strip" />
</div>

<style>
	.stars {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80%;
		height: 80%;
		opacity: 0.8;
	}

	.stars img {
		animation: starsFlickering 2.5s linear infinite;
		filter: blur(3px);
	}
	.badge-border {
		width: 36px;
		height: 36px;
		border-radius: 8px;
		border: 3px solid #1e293b;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.icon {
		width: 100%;
		height: 50%;
		object-fit: cover;
		overflow: hidden;
	}
	.glow-strip {
		width: 5%;
		height: 200%;
		border-radius: 15px;
		background-image: linear-gradient(45deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
		position: absolute;
		top: -50%;
		left: -50%;
		opacity: 0.7;
		animation: glowTransition 5s infinite;
		box-shadow: 0px 0px 3px 3px rgba(255, 255, 255, 0.1), 0px 0px 5px 4px rgba(255, 255, 255, 0.5);
		transform: rotate(-45deg);
		filter: blur(1px);
	}

	@keyframes glowTransition {
		from {
			left: -50%;
		}
		to {
			left: 170%;
		}
	}

	@keyframes starsFlickering {
		0% {
			opacity: 0.2;
		}
		50% {
			opacity: 0.8;
		}
		100% {
			opacity: 0.2;
		}
	}
</style>
