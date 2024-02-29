const noIcon = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
const androidIcon = "iVBORw0KGgoAAAANSUhEUgAAAGAAAAA2CAYAAAA4T5zSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFomlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuZjM1NGVmYywgMjAyMy8xMS8wOS0xMjo0MDoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjUgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0wMi0yNlQxMDo1MjoyMVoiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTAyLTI3VDEwOjQ4OjIzWiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wMi0yN1QxMDo0ODoyM1oiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE1NmVjOTViLWUzMmItZjE0MC05ZDM3LWFmMDQ1ODNmNWY3ZiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyYWYwZjk5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";
const appleIcon = "iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFomlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuZjM1NGVmYywgMjAyMy8xMS8wOS0xMjo0MDoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjUgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0wMi0yNlQxMDo1MjoyMVoiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTAyLTI3VDEwOjUwOjM5WiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wMi0yN1QxMDo1MDozOVoiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkwZDJlZGU1LTM3MzctYjg0Yi04OWU3LTRmZDY5ZTI0MTE2NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpiNWIwNjQ0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";
const heartIcon = "iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGamlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuZjM1NGVmYywgMjAyMy8xMS8wOS0xMjo0MDoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjUgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0wMi0yNlQxMDo1MjoyMVoiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTAyLTI4VDA5OjI5OjU4WiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wMi0yOFQwOToyOTo1OFoiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVjMzZiMThlLTRiNWUtODg0MC1iNjg4LWMzYjk3ZDM3MDQzNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpiNWIwNjQ0Mi00NDUwLTg0NDgtYTRjNC0wZjkyNjgzYTU4MmQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiNWIwNjQ0Mi00NDUwLTg0NDgtYTRjNC0wZjkyNjgzYTU4MmQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmI1YjA2NDQyLTQ0NTAtODQ0OC1hNGM0LTBmOTI2ODNhNTgyZCIgc3RFdnQ6d2hlbj0iMjAyNC0wMi0yNlQxMDo1MjoyMVoiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS41IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OTBkMmVkZTUtMzczNy1iODRiLTg5ZTctNGZkNjllMjQxMTY1IiBzdEV2dDp3aGVuPSIyMDI0LTAyLTI3VDEwOjUwOjM5WiIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjUgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1YzM2YjE4ZS00YjVlLTg4NDAtYjY4OC1jM2I5N2QzNzA0MzYiIHN0RXZ0OndoZW49IjIwMjQtMDItMjhUMDk6Mjk6NThaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjUuNSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MZClqAAABGdJREFUeNrtnUtIVFEYx08P6G1FWRBRGUEP2pT0wKAH9lIhqKCIVoG7xF6URFREBVFEi4hCo6J2CbrIhJIWGm0qih4GVpA9BM0Ie1FR+msxZ2qapvGOc+855zrfD85KcL7z+4tzZ+4936cAJcveEgkSgAQgSwKQAIJYo4AcYBGwESgB9uhVCqzXP5sIZFnYfBYwGVisaymNqW8zsEHXlwOMDEMAg4B84ARQC3wBuuieTqADqAb2ArMDlD4H2K9fqwNvdAEfgRq9t3xgoEsB5AHlQDP+cRfYAWT7UN84oAy452N9L4Azeu/WAigCGgiW98CuNGo8AHwKuMYGYKXJAOYbEB/Pff2/2muNBUCj4RrrtZtAAziMXXZ7qPGg5RoPBRHAeOAmblCRpM6LjtRYr535EkAu0I5bXExQ52XHamwHZqUbQK6+nHSRkzF1nnO0xs/dXVYnkz9F/wKXWaCvQFzmk3aZUgBZQCvu80Mv12kFhqUSwFUEv7niNYBicRUYxd0FkA18E0+B8S3+65X4ACrEkdnPMfEftgQzjE8UwFHxYoyj8QH0B1rEizFatPPfAawWJ8ZZHRvAJfFhnEuxATSJD+M0RQOYLi6sMV0Ba8WDNdYqYJ94sMY+BZwVD9Y4q4BK8WCNSgXUiQdr1Cngtniwxm2Fv0+0CanRrIDX4sEarxXmnyAT/tCogDviwRp3FJGbxYIdrijggniwxgW5D2yXCkXkiWPBDrsVUCgerFGogGniwRrTonfEnooL4zwD+kQDqBIfxqki5p7wJvFhnE2xAWQTOa8rmKFTO//rybha8WKMWhI8mlgkXoxRlCiAPkCbuAmcNqAv/3k8fYv4CZztJDkfMADvTSyE1PlApKlJ0iNKO8VTYJTh8ZCevBf4TzspnJJcI758Zz0pHtS+Js58o44enJQfTTgOQbvOT2AMPewVsU78pc0G0uyWclIc9pjT+NQvqF5cpswtfGzYNIRIozrBG2/w2IozlXZlkwi+AV5v4DNJ2tOQZs+4OfpdXUhMJzCPgLsm5kkICeki0mnXSN/QReL7H/Ix3Lh1Kd5aE2cCBVhqXZxHZvcX+g4sxHLv6NkZenX0RV+UONE9fSbwKoPkt+GhJyiG29ePJTMO/N3DY1dcLA1wqOnF8muBfoRggkZ5L5R/npCNMNnSi+Rvg3AO8VmF++2Pk/EV3dkqrAEoYCrwKITynwAzgvZjamLRANxrL5+MamCwCTemR0eF4ZmjMpNObAwvWwa8dVD8O9IYxhOmAKJdeq87JP8GMMGGC9uj/PY6IH+/TQcuzFNcBry0IP4lsNz2/l0ZajlcX3mYokq/pkxTjVtbDcgvdWnPLo54XRDQB7eHwFzX9uvyrN1jPso/4uo+XR94vJz0eto9B5a4vMcwTJ0eSs9GFJYTdxxIAkj/m1UvDQabgBVh2VfYZrCPAE4lkX88DH/1YQ4g9lD54xjxD4g8pxS6vYQ1gOgqIcFwNAlAlgQgAciSACQAWd2uX2y3sGfMOdZVAAAAAElFTkSuQmCC";
const icons = [noIcon, androidIcon, appleIcon, heartIcon];
let selectedIcon = noIcon;
const colors = [[68, 111, 49], [129, 68, 199], [24, 80, 137], [136, 31, 31], [190, 75, 85], [31, 100, 100], [51, 51, 51], [0, 0, 0], [255, 12, 150], [237, 120, 7]];
let bannerRed = colors[0][0];
let bannerGreen = colors[0][1];
let bannerBlue = colors[0][2];

function refreshUI() {
    const fileTag = "imagefile";
    const labelTag = "label";
    const canvasWidth = 400;
    const canvasHeight = 400;
    const bannerWidthRatio = 0.16;
    const iconSize = 48;
    const outlineThickness = 2;
    const outlineAlpha = 0.24;

    const canvas = document.getElementById("canvas");

    if (typeof window.FileReader !== 'function') {
        write("The file API isn't supported on this browser yet.");
        return;
    }

    const input = document.getElementById(fileTag);
    if (!input) {
        write("Couldn't find the " + fileTag + " element.");
    } else if (!input.files) {
        write("This browser doesn't support the `files` property of file inputs.");
    } else if (input.files[0]) {
        const labelField = document.getElementById(labelTag);
        var file = input.files[0];
        fileReader = new FileReader();
        fileReader.onload = function() { createImage(fileReader.result, labelField.value) };
        fileReader.readAsDataURL(file);
    } else {
        initializeColors();
        initializeIcons();
        const canvasImage = document.getElementById("canvasImage");
        canvasImage.width = canvasWidth;
        canvasImage.height = canvasHeight;
    }

    function getContext() {
        return canvas.getContext("2d", { willReadFrequently: true });
    }

    function initializeColors() {
        const colorsContainer = document.getElementById("colors");
        colorsContainer.innerHTML = '';

        colors.forEach((color) => {
            const colorButton = document.createElement('canvas');
            colorButton.width = 48;
            colorButton.height = 48;
            const context = colorButton.getContext("2d");
            context.beginPath();
            context.arc(24, 24, 22, 0, 2 * Math.PI);
            const colorString = color.join(', ');
            if (colorString === bannerRed + ', ' + bannerGreen + ', ' + bannerBlue) {
                context.lineWidth = 2;
                context.strokeStyle = 'black';
            } else {
                context.lineWidth = 1;
                context.strokeStyle = 'rgba(0, 0, 0, 0.3)';
            }
            context.stroke();
            context.closePath();
            context.beginPath();
            context.arc(24, 24, 19, 0, 2 * Math.PI);
            context.fillStyle = 'rgba(' + colorString + ', 1)';
            context.fill();
            context.closePath();
            colorButton.onclick = function() {
                bannerRed = color[0];
                bannerGreen = color[1];
                bannerBlue = color[2];
                initializeColors();
                refreshUI();
            };
            colorsContainer.appendChild(colorButton);
            if (colors.indexOf(color) % 8 == 7) {
                const newLine = document.createElement('br');
                colorsContainer.appendChild(newLine);
            }
        });
    }

    function initializeIcons() {
        const iconsContainer = document.getElementById("icons");
        iconsContainer.innerHTML = '';
        icons.forEach((icon) => {
            const iconButton = imageHolderWithImage(icon);
            iconButton.width = 32;
            iconButton.height = 32;
            if (icon === selectedIcon) {
                iconButton.style.outline = '2px solid black';
                iconButton.style.outlineOffset = '3px';
            } else {
                iconButton.style.outline = '1px solid rgba(0, 0, 0, 0.3)';
                iconButton.style.outlineOffset = '4px';
            }
            iconsContainer.appendChild(iconButton);
            const newLine = document.createElement('br');
            iconsContainer.appendChild(newLine);
            iconButton.onclick = function() {
                selectedIcon = icon;
                initializeIcons();
                refreshUI();
            };
        });
    }

    function createImage(imageSrc, label) {
        const image = new Image();
        image.onload = function() {
            resizeAndDrawImage(image);
            applyBannerColor();
            applyBannerText(label);
            applyIcon(selectedIcon);
            applyAlphaMask();
            document.getElementById("canvasImage").src = canvas.toDataURL("image/png");
        };
        image.src = imageSrc;
    }

    function resizeAndDrawImage(image) {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        const imageWidth = image.naturalWidth;
        const imageHeight = image.naturalHeight;

        const scale = Math.max(canvasWidth / imageWidth, canvasHeight / imageHeight);

        const scaledWidth = imageWidth * scale;
        const scaledHeight = imageHeight * scale;

        const context = getContext();
        context.drawImage(image, (canvasWidth - scaledWidth) / 2, (canvasHeight - scaledHeight) / 2, scaledWidth, scaledHeight);
    }

    function applyBannerColor() {
        const context = getContext();
        const imageData = context.getImageData(0, 0, canvasWidth, canvasHeight);
        const data = imageData.data;
        const centerX = canvasWidth / 2;
        const centerY = canvasHeight / 2;
        const radius = Math.min(canvasWidth, canvasHeight) * (0.5 - bannerWidthRatio);
        const startAngle = 50;
        const sweepAngle = 20;
        const endAngle = 200;
        var blend;
        for (let i = 0; i < data.length; i += 4) {
            const pixelIndex = (i / 4);
            const x = pixelIndex % canvasWidth;
            const y = Math.floor(pixelIndex / canvasWidth);
            const relativeX = x - centerX;
            const relativeY = y - centerY;
            const distance = Math.sqrt(relativeX * relativeX + relativeY * relativeY);
            if (distance > radius) {
                blend = 1;
            } else if (Math.abs(distance - radius) < 1) {
                blend = 1 - Math.abs(distance - radius);
            } else {
                blend = 0;
            }
            const angle = (Math.atan2(relativeY, relativeX) / Math.PI * 180 + 360) % 360;
            if (angle > startAngle && angle < startAngle + sweepAngle) {
                blend *= (angle - startAngle) / sweepAngle;
            } else if (angle > endAngle  && angle < endAngle + sweepAngle) {
                blend *= (endAngle + sweepAngle - angle) / sweepAngle;
            } else if (angle <= startAngle || angle >= endAngle + sweepAngle) {
                blend = 0;
            }
            data[i + 0] = data[i + 0] * (1 - blend) + bannerRed * blend;
            data[i + 1] = data[i + 1] * (1 - blend) + bannerGreen * blend;
            data[i + 2] = data[i + 2] * (1 - blend) + bannerBlue * blend;
        }
        context.putImageData(imageData, 0, 0);
    }

    function applyBannerText(text) {
        const context = getContext();

        const centerX = canvasWidth / 2;
        const centerY = canvasHeight / 2;
        const radius = Math.min(canvasWidth, canvasHeight) * (1 - bannerWidthRatio * .38) / 2;
        const fontSize = Math.floor(Math.min(canvasWidth, canvasHeight) * bannerWidthRatio * 0.55);
        const characterSpacing = Math.floor(fontSize * .15);

        context.font = 'bold ' + fontSize + "px Verdana";
        context.textAlign = 'left';
        context.textBaseline = 'bottom';
        context.strokeStyle = 'rgba(0, 0, 0, ' + outlineAlpha + ')';
        context.lineWidth = outlineThickness * 2;
        context.fillStyle = 'white';

        const totalLength = context.measureText(text).width + characterSpacing * (text.length - 1);

        let angleStart = (190 + 20 + 85) / 2 / 180 * Math.PI + totalLength / radius / 2;
        const selectedIconHolder = imageHolderWithImage(selectedIcon);
        if (selectedIconHolder.width !== 1) {
            angleStart += (iconSize / 2 + characterSpacing) / radius;
        }

        let angle = angleStart;
        for (let i = 0; i < text.length; ++i) {
            const character = text[i].toUpperCase();
            context.save();
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            context.translate(x, y);
            context.rotate(angle - Math.PI / 2 - 0.05);
            context.strokeText(character, 0, 0);
            context.restore();

            const characterWidth = context.measureText(character).width + characterSpacing;
            angle -= characterWidth / radius;
        }

        angle = angleStart;
        for (let i = 0; i < text.length; ++i) {
            const character = text[i].toUpperCase();
            context.save();
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            context.translate(x, y);
            context.rotate(angle - Math.PI / 2 - 0.05);
            context.fillText(character, 0, 0);
            context.restore();

            const characterWidth = context.measureText(character).width + characterSpacing;
            angle -= characterWidth / radius;
        }
    }

    function imageHolderWithImage(base64Image) {
        const imageHolder = document.createElement('img');
        imageHolder.src = 'data:image/png;base64,' + base64Image;
        return imageHolder;
    }

    function applyIcon(icon) {
        const imageHolder = imageHolderWithImage(icon);
        if (imageHolder.naturalWidth === 1) {
            return;
        }
        let targetWidth = iconSize;
        let targetHeight = Math.floor(iconSize * imageHolder.naturalHeight / imageHolder.naturalWidth);
        const iconX = (canvasWidth - targetWidth) / 2;
        const iconY = canvasHeight * (1 - bannerWidthRatio / 2) - targetHeight / 2;
        applyOutline(imageHolder, iconX, iconY, targetWidth, targetHeight);
        const context = getContext();
        context.drawImage(imageHolder, iconX, iconY, targetWidth, targetHeight);
    }

    function applyOutline(imageHolder, x, y, width, height) {
        const shadowHolder = shadowImage(imageHolder, width, height);
        const outlineHolder = document.createElement('canvas');
        outlineHolder.width = width + outlineThickness * 2 + 1;
        outlineHolder.height = height + outlineThickness * 2 + 1;
        const outlineContext = outlineHolder.getContext("2d");
        for (let offsetX = 0; offsetX <= outlineThickness * 2; ++offsetX) {
            for (let offsetY = 0; offsetY <= outlineThickness * 2; ++offsetY) {
                outlineContext.drawImage(shadowHolder, offsetX, offsetY, width, height);
            }
        }

        const context = getContext();
        context.save();
        context.globalAlpha = outlineAlpha;
        context.drawImage(outlineHolder, x - outlineThickness, y - outlineThickness, outlineHolder.width, outlineHolder.height);
        context.restore();
    }

    function shadowImage(imageHolder, width, height) {
        const negativeHolder = document.createElement('canvas');
        negativeHolder.width = width;
        negativeHolder.height = height;
        const context = negativeHolder.getContext("2d");
        context.drawImage(imageHolder, 0, 0, width, height);
        const imageData = context.getImageData(0, 0, width, height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            data[i] = 0;
            data[i + 1] = 0;
            data[i + 2] = 0;
        }
        context.putImageData(imageData, 0, 0);
        return negativeHolder;
    }

    function applyAlphaMask() {
        const context = getContext();
        const imageData = context.getImageData(0, 0, canvasWidth, canvasHeight);
        const data = imageData.data;
        const middleX = canvasWidth / 2;
        const middleY = canvasHeight / 2;
        const radius = Math.min(canvasWidth, canvasHeight) / 2;
        var alpha;
        for (let i = 0; i < data.length; i += 4) {
            const pixelIndex = (i / 4);
            const x = pixelIndex % canvasWidth;
            const y = Math.floor(pixelIndex / canvasWidth);
            const distance = Math.sqrt(Math.pow(x - middleX, 2) + Math.pow(y - middleY, 2));
            if (distance > radius) {
                alpha = 0;
            } else if (Math.abs(distance - radius) < 1) {
                alpha = 255 * Math.abs(distance - radius);
            } else {
                alpha = 255;
            }
            data[i + 3] = alpha;
        }
        context.putImageData(imageData, 0, 0);
    }

    function write(message) {
        var p = document.createElement('p');
        p.innerHTML = message;
        document.body.appendChild(p);
    }
}
