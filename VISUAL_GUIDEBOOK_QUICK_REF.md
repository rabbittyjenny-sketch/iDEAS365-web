# 🎨 iDEAS365 Visual Guidebook - Quick Reference

## สรุปสั้นๆ

เราได้นำ **iDEAS365 Visual Guidebook** มาปรับใช้กับ Design System แล้ว โดยเก็บเนื้อหาและโครงสร้างเดิมไว้ทั้งหมด แต่ปรับ UI/UX ให้สอดคล้องกับ brand identity

---

## 🎯 การเปลี่ยนแปลงหลัก

### สี (Google Inspired)
```css
Blue:   #4285F4  /* System */
Yellow: #FBBC05  /* Insight */
Green:  #34A853  /* Growth */
Red:    #EA4335  /* Action/CTA */
```

### ฟอนต์
```css
Display: Montserrat Alternates
Body:    Noto Sans Thai
Thai:    Noto Sans Thai → Sarabun
```

### Layout
```css
Container: 1440px (เดิม 1200px)
Section:   160px spacing (เดิม 128px)
Gutter:    24px/20px/16px (responsive)
```

---

## 📦 Design Elements ใหม่

| Class | ใช้สำหรับ |
|-------|-----------|
| `.minimal-card` | Card แบบ minimal |
| `.idea-box` | Quote/Ideas box |
| `.dot-grid-bg` | พื้นหลังจุดเล็กๆ |
| `.section-border` | เส้นซ้าย 4px |
| `.scribble-underline` | เส้นใต้แบบ scribble |
| `.focus-circle` | วงกลมล้อมรอบ |

---

## 📱 Responsive

| Device | Width | Grid | Gutter |
|--------|-------|------|--------|
| Desktop | 1440-1920px | 12-16 col | 24px |
| Tablet | 768-1024px | 8 col | 20px |
| Mobile | 360-430px | 1 col | 16px |

---

## 📚 เอกสารเพิ่มเติม

1. **VISUAL_GUIDEBOOK_IMPLEMENTATION.md** - คู่มือการใช้งานแบบละเอียด
2. **DESIGN_SYSTEM_COMPARISON.md** - เปรียบเทียบ V2.1 vs V3.0

---

## ✅ Next Steps

1. อัพเดทฟอนต์ใน `layout.tsx`
2. ปรับ Components ให้ใช้สีและ design elements ใหม่
3. ทดสอบ responsive ทุก breakpoint

---

**Version**: 3.0  
**Based on**: iDEAS365 Visual Guidebook  
**Philosophy**: Structured Creativity + Minimalism
