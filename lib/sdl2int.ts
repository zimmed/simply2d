const sdl2bind = require("../build/Release/canvas_sdl2.node");
import * as sdl from "./sdlValues.js"
import { Colors } from "./colors.js";

export function getWindow(title: string, xPos: number, yPos: number, width: number, height: number, flags: number) {
	if (sdl2bind.sdlInit(sdl.SDL_Init_Everything) != 0) {
		throw "An error occurred while initializing SDL: " + sdl2bind.getError();
	}

	return sdl2bind.createWindow(title, xPos, yPos, width, height, flags);

}

// export function getRenderer(window: Pointer<void>, index: number, flag: number) {
// 	return sdl.SDL2.SDL_CreateRenderer(window, index, flag);
// }

// export function showWindow(window: Pointer<void>) {
// 	sdl.SDL2.SDL_ShowWindow(window);
// }

// export function hideWindow(window: Pointer<void>) {
// 	sdl.SDL2.SDL_HideWindow(window);
// }

// export function clearWithColor(renderer: Pointer<void>, r: number, g: number, b: number, alpha: number) {
// 	sdl.SDL2.SDL_SetRenderDrawColor(renderer, r, g, b, alpha);
// 	sdl.SDL2.SDL_RenderClear(renderer);
// 	sdl.SDL2.SDL_RenderPresent(renderer);
// }

// export function delay(ms: number) {
// 	sdl.SDL2.SDL_Delay(ms);
// }

// export function setPoint(renderer: Pointer<void>, r: number, g: number, b: number, a: number, px: number, py: number) {
// 	sdl.SDL2.SDL_SetRenderDrawColor(renderer, r, g, b, a);
// 	sdl.SDL2.SDL_RenderDrawPoint(renderer, px, py);
// 	sdl.SDL2.SDL_RenderPresent(renderer);
// }

// export function _setRawData256(renderer: Pointer<void>, buffer: Uint8Array, width: number, height: number) {
// 	let px = 0;
// 	let py = 0;
// 	for (let i = 0; i < buffer.length; i++) {
// 		let c = Colors.from8bit(buffer[i]);
// 		sdl.SDL2.SDL_SetRenderDrawColor(renderer, c.red, c.green, c.blue, c.alpha);
// 		sdl.SDL2.SDL_RenderDrawPoint(renderer, px, py);
// 		px++;
// 		if (px === width) {
// 			px = 0;
// 			py++;
// 		}
// 	}
// 	sdl.SDL2.SDL_RenderPresent(renderer);
// }

// export function setLine(renderer: Pointer<void>, r: number, g: number, b: number, a: number, px1: number, py1: number, px2: number, py2: number) {
// 	sdl.SDL2.SDL_SetRenderDrawColor(renderer, r, g, b, a);
// 	sdl.SDL2.SDL_RenderDrawLine(renderer, px1, py1, px2, py2);
// 	sdl.SDL2.SDL_RenderPresent(renderer);
// }

// export function setImage(renderer: Pointer<void>, filename: string, imgInitFlag: number) {
// 	if (image.SDL2_IMAGE.IMG_Init(imgInitFlag) === 0) {
// 		throw "An error occurred while setting image: " + sdl.SDL2.SDL_GetError();
// 	}
// 	let texture = image.SDL2_IMAGE.IMG_LoadTexture(renderer, filename);
// 	if (texture.isNull()) {
// 		throw "Cannot load texture from " + filename + ": " + sdl.SDL2.SDL_GetError();
// 	}
// 	//@ts-ignore
// 	if (sdl.SDL2.SDL_RenderCopy(renderer, texture, NULL, NULL) !== 0) {
// 		throw "Cannot load the texture into the renderer";
// 	}
// 	sdl.SDL2.SDL_RenderPresent(renderer);
// 	image.SDL2_IMAGE.IMG_Quit();
// }

// export function setPNG(renderer: Pointer<void>, filename: string) {
// 	setImage(renderer, filename, image.IMG_Init_Flags.IMG_INIT_PNG);
// }

// export function setJPG(renderer: Pointer<void>, filename: string) {
// 	setImage(renderer, filename, image.IMG_Init_Flags.IMG_INIT_JPG);
// }

// export function setRectangle(renderer: Pointer<void>, x: number, y: number, width: number, height: number) {
// 	// let rect = new SDL2_Rect();
// 	// //@ts-ignore
// 	// rect.x = x;
// 	// //@ts-ignore
// 	// rect.y = y;
// 	// //@ts-ignore
// 	// rect.w = width;
// 	// //@ts-ignore
// 	// rect.h = height;
// 	// //@ts-ignore
// 	// sdl.SDL2.SDL_RenderDrawRect(renderer, rect.ref());
// }

// export function setRawData(renderer: Pointer<void>, buffer: Uint8Array, bitPerPixel: number, width: number, height: number) {
// 	let pixelFormat = image.SDL_PIXEL_FORMAT.SDL_PIXELFORMAT_RGBA8888;
// 	if (bitPerPixel === 8) pixelFormat = image.SDL_PIXEL_FORMAT.SDL_PIXELFORMAT_RGB332;
// 	else if (bitPerPixel === 16) pixelFormat = image.SDL_PIXEL_FORMAT.SDL_PIXELFORMAT_RGB565;
// 	else pixelFormat = image.SDL_PIXEL_FORMAT.SDL_PIXELFORMAT_RGB888;
// 	let texture = sdl.SDL2.SDL_CreateTexture(renderer, pixelFormat, image.SDL_TEXTURE_ACCESS.SDL_TEXTUREACCESS_STREAMING, width, height);

// 	let buff = Buffer.from(buffer);
// 	let int = Buffer.allocUnsafe(4);
// 	int.writeInt32LE(width * bitPerPixel / 8);
// 	//@ts-ignore
// 	if (sdl.SDL2.SDL_LockTexture(texture, NULL, buff.ref().ref(), int.ref()) !== 0) {
// 		throw "Cannot draw the texture";
// 	};
// 	sdl.SDL2.SDL_UnlockTexture(texture);
// 	//@ts-ignore
// 	if (sdl.SDL2.SDL_RenderCopy(renderer, texture, NULL, NULL) !== 0) {
// 		throw "Cannot load the texture into the renderer";
// 	};
//     sdl.SDL2.SDL_RenderPresent(renderer);
// }

// function _debug() {
// 	console.log(sdl.SDL2.SDL_GetError());
// }