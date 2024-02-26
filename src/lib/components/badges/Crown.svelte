<script lang="ts">
	const colour = {
		bronze: 'crown_bronze.png',
		silver: 'crown_silver.png',
		gold: 'crown_gold.png'
	};

	export let variant = 'bronze';

	console.log(`${colour[variant]}`);
</script>

<!-- {#if variant === 'bronze'}
	<div class="crown-border px-2">
		<img
			class="crown-icon"
			src="https://s3-alpha-sig.figma.com/img/5229/e11b/27a09239f17793d9210979ecf78384bb?Expires=1691971200&Signature=ncUtSW8CJbO-89sfcyfQumtxPSmogvAq0G6csZoLME1MHBZ-KiieWCLwXZIgt84ie4AX52Nm06MjQOWre-2KaSEA9XP7~T3WtCCPzC93tgOd9ydDzSEQkFxfU~~ljHIl8QHCERZJszbab7iMjLXkLdddKXyZ3HVu5BpEwqjIGrXs8~hjOHvgC-g6gof~eHzrWkPMXFVklOfQNjbmm8DfuLTUnKkXE-t9h5UOmyAV6I7~AeobAENJrjkSfxI2TUYT7gtulD2ehtgX5b4ZtkO~CFbrqg72KrmP0HMAcQNndISPX4u-hBapulTQXcS4oQJsR~-TnA4ftBHHvfcjWuEcDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
			alt=""
		/>
		<div class="glow-strip" />
	</div>
{:else if variant === 'silver'}
	<div class="crown-border px-2">
		<img
			class="crown-icon"
			src="https://s3-alpha-sig.figma.com/img/296d/3dd9/4645a6079cd81d50aaadb2849eb990e5?Expires=1691971200&Signature=EoqjGT~3ME8Vo2dtsbRCi5vqBPYSl0m5jY2YoxrIBUiSAvpON0iB2bgxXJV8xA5ZEcdRY0aWOLkUV435bC~zallVA4dzrE8XZ1b2toNqp6DAnZNUAWGrInouOsKFvKaJMISLVYUOkI-9TiF6eZ3UJXavgkEs7OoTCyooOPGchfCt4Pzt-Y7LvVCQmHjAX6Dq2DKhFhr~YkspjFILmaBeLa8dybI8HTuZ4l9-EMq34rd4XeF77DelkuoKnAz8QH39GPKpPAb1f0sT911il1qXLFt47h6iart7kDZYWKoO3GaZzSbuPwxZm5r7OVty2udaMBy6wuriZtj1dg7bGyZ6iQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
			alt=""
		/>
		<div class="glow-strip" />
	</div>
{:else if variant === 'gold'}
	<div class="crown-border px-2">
		<img
			class="crown-icon"
			src="https://s3-alpha-sig.figma.com/img/388a/daeb/bfdc9ebcf014849584b73a3a36df8481?Expires=1691971200&Signature=QIStdY-VCMMLzxmba5qYUMStrVIJvMnQEqqp-QhNwFe4hk8eWS5NK-ifFUH4HkoU9Z2voilnu8yJzJPHSpRNjc~wd5-dn21oGUr836rG3p1nVfm019Fv8qij2Fp7zjBlhlFZuyzRTxJoDPgrqdVNfEBpomYC2ERAEETdT3O6-RhBRd66WgvsKOOd2VI1uGdWRwT-6bZ9EwpyAkJ4TTsHkN8ea4KZ88IHRXP0crJvdL9BD6C2fheidWs81qf8ICpQtUxAqoIcodLpAX2piOLNmP3z3gfSTDrfj1QBOLQRh3ZCFGmvc~id2A9Hk0r8rnGGNKzDPSbLIfHepmKLcebW-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
			alt=""
		/>

		<div class="glow-strip" />
	</div>
{/if} -->
<div class="crown-border px-2">
	<img class="crown-icon" src={`${colour[variant]}`} alt="" />

	<div class="glow-strip" />
</div>

<style>
	.crown-border {
		width: 36px;
		height: 36px;
		border-radius: 8px;
		border: 3px solid rgba(30, 41, 59, 1);
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
		position: relative;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
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
	.crown-icon {
		width: 100%;
		height: 50%;
		object-fit: cover;
	}

	@keyframes glowTransition {
		from {
			left: -50%;
		}
		to {
			left: 170%;
		}
	}
</style>
