#include "sdl2image_node.hh"

Napi::Value SDLImage::init(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();
    int flags = info[0].As<Napi::Number>().Int64Value();
    return Napi::Number::New(env, IMG_Init(flags));
}

Napi::Value SDLImage::load_texture(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();
    SDL_Renderer *renderer = (SDL_Renderer*)get_ptr_from_js(info[0].As<Napi::ArrayBuffer>());
    std::string filename = info[1].As<Napi::String>().Utf8Value();
    SDL_Texture *texture = IMG_LoadTexture(renderer, filename.c_str());
    if (texture == NULL) return env.Undefined();
    return Napi::ArrayBuffer::New(env, texture, sizeof(texture));
}

Napi::Value SDLImage::quit(const Napi::CallbackInfo& info)
{
    Napi::Env env = info.Env();
    IMG_Quit();
    return env.Undefined();
}