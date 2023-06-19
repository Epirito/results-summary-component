import { ComponentChildren } from "preact";

export default function NotificationCounter({count, children}: {count: number, children: ComponentChildren}) {
    return <div class="relative">
        {count ? <div class="absolute -right-1 -top-1 rounded-full px-[6px] text([8px] white)" style={{backgroundColor: 'hsl(26, 100%, 55%)'}}>
                {count}
        </div> : null}
        {children}
    </div>
}