#include "Banks/SetAutoBank.h"

#include "ZGBMain.h"
#include "Keys.h"
#include "SpriteManager.h"
#include "Sound.h"
#include "Print.h"

const UINT8 anim_idle[] = {1, 0}; // The first number indicates the number of frames
const UINT8 anim_walk[] = {2, 1, 2};

void START()
{
}

void UPDATE()
{
    UINT8 i;
    Sprite *spr;

    if (KEY_PRESSED(J_UP))
    {
        TranslateSprite(THIS, 0, -1 << delta_time);
        SetSpriteAnim(THIS, anim_walk, 15);
    }
    if (KEY_PRESSED(J_DOWN))
    {
        TranslateSprite(THIS, 0, 1 << delta_time);
        SetSpriteAnim(THIS, anim_walk, 15);
    }
    if (KEY_PRESSED(J_LEFT))
    {
        TranslateSprite(THIS, -1 << delta_time, 0);
        SetSpriteAnim(THIS, anim_walk, 15);
    }
    if (KEY_PRESSED(J_RIGHT))
    {
        TranslateSprite(THIS, 1 << delta_time, 0);
        SetSpriteAnim(THIS, anim_walk, 15);
    }
    if (keys == 0)
    {
        SetSpriteAnim(THIS, anim_idle, 15);
    }

    SPRITEMANAGER_ITERATE(i, spr)
    {
        if (spr->type == SpriteEnemy)
        {
            if (CheckCollision(THIS, spr))
            {
                PlayFx(CHANNEL_1, 10, 0x4f, 0xc7, 0xf3, 0x73, 0x86);
                SetState(StateGame);
            }
        }
    }

    DPRINT_POS(0, 0);
    DPrintf("x:%d y:%d  ", THIS->x, THIS->y);
}

void DESTROY()
{
}