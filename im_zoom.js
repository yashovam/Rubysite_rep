/* ZOOM FEATURE   */
const scaleUp = (image) => {
	
	const scale = parseFloat(image.getAttribute("scaler"));
	image.style.transform = `scale(${scale + 0.1})`;
	image.setAttribute("scaler", Math.max(0, scale + 0.1));
};

const scaleDown = (image) => {
	
	const scale = parseFloat(image.getAttribute("scaler"));
	image.style.transform = `scale(${scale - 0.1})`;
	image.setAttribute("scaler", Math.max(0, scale - 0.1));
};

(async () => {
	
	var zimages = document.querySelectorAll("#slimg"); /*  TARGETER  */
	
	await zimages.decode();

	const buttonContainer = document.createElement("div");
	buttonContainer.style.position = "absolute";
	buttonContainer.style.bottom = "15px";
	buttonContainer.style.width = "100%";
	buttonContainer.style.textAlign = "center";

	for (let image of zimages) {
		await image.decode();
		const container = document.createElement("div");
		container.style.position = "relative";
		container.style.display = "inline-block";
		container.style.overflow = "hidden";
		container.style.width = image.clientWidth;
		container.style.height = image.clientHeight;

		const containerImage = image.cloneNode();
		containerImage.setAttribute("scaler", "1");

		const plusButton = document.createElement("button");
		const minusButton = document.createElement("button");
		plusButton.textContent = "+";
		minusButton.textContent = "-";

		plusButton.addEventListener("click", () => scaleUp(containerImage), true);
		minusButton.addEventListener("click", () => scaleDown(containerImage), true);

		container.addEventListener(
			"wheel",
			(event) => {
				event.preventDefault();

				if (event.deltaY < 0) scaleUp(containerImage);
				else if (event.deltaY > 0) scaleDown(containerImage);
			},
			true
		);

		const imageButtonContainer = buttonContainer.cloneNode();
		imageButtonContainer.appendChild(minusButton);
		imageButtonContainer.appendChild(plusButton);

		container.appendChild(containerImage);
		container.appendChild(imageButtonContainer);
		image.replaceWith(container);
	}
})();
