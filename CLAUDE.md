# diseños/ — mapa de navegación de los Pencils

Diseños UI/UX del equipo (repo `Jacques-Technologies/LOGISTICA-ADAPTABLE`, clonado
aquí, **gitignored**). Este archivo es el índice para encontrar cosas rápido dentro
de los `.pen`. El plan de construcción (hoja de ruta + componentes) vive en
[`../docs/diseno-portales.md`](../docs/diseno-portales.md).

## Cómo leer los `.pen`

- **Solo vía MCP de Pencil** (nunca Read/Grep — están encriptados).
- `get_editor_state` devuelve **solo el pencil ACTIVO** (uno a la vez). Para mapear otro, pídele al usuario que cambie de pestaña en Pencil.
- Inventario completo de un pencil: `batch_get(filePath, readDepth:1)` y parsear con `jq` (suele exceder el límite de tokens → se guarda a archivo).
- Cada pencil trae los frames **"Design System"** y **"Additional Components"** (style guide + átomos) y los mismos ~21 componentes reusables (Cell, BTN*, Input*, Dropdown, Checkbox).
- Canvas organizado por **rótulos de texto gigantes** (fontSize 200 en admin / 24 en cliente) con el código de flujo (C03, G06, P01…). Las pantallas cuelgan en bandas bajo cada rótulo.
- Admin: cada pantalla = frame `Sidebar` (w220, `$Primary`) + `Content`. Cliente: nav superior.

## Tokens (idénticos en `@la/ui`)

`Primary #1B4965` · `Accent #3DB8E8` · `Secondary #EB4040` · `Dark Text #2F2F2F` ·
`Positivo #128E04` · `Negativo #C61818` · grises · Inter. Detalle: `packages/ui/src/tokens.ts`.

## Archivos

| Pencil                        | Cubre                                       | Nodos |
| ----------------------------- | ------------------------------------------- | :---: |
| `CLIENTES-PORTAL.pen`         | Portal Cliente completo                     |  107  |
| `ADMIN-CLIENTES.pen`          | Admin › Clientes (C01–C14)                  |  67   |
| `ADMIN-GUIAS.pen`             | Admin › Guías (G01–G14)                     |  77   |
| `ADMIN-REC-TIC-CRM.pen`       | Admin › Recolecciones + Tickets + CRM       |  26   |
| `ADMIN-USER-COMISIONES.pen`   | Admin › Usuarios + Comisiones               |  14   |
| `ADMIN-ADMIN.pen`             | Admin › Administración (Precios/Facturas/Auditoría) | 60 |
| `BACKUP-LOGISTICA ADAPTABLE.pen` | Respaldo — **ignorar**                   |   —   |

Logos de aliados (ampm, bajapack, dhl, estafeta, fedex, ptx, sendex, sukarne, ups, paquetexpress) y assets varios también viven aquí.

---

## Índice de pantallas por ID de nodo

> IDs para `get_screenshot` / `batch_get(nodeIds:[…])` cuando el pencil esté activo.

### `CLIENTES-PORTAL.pen`

- **Design system**: `EMGtR` (style guide) · `YOtH2` (additional components)
- **Dashboard (I01)**: `y4HjVP` Inicio · `aEwIG` Tab Bar (móvil)
- **Auth**: `YUmhi` Iniciar sesión · S02 recuperar: `AVaNQ`→`d1zri`→`b63KaG`→`xdzoe`
- **Registro (S03, wizard)**: `ab8dE` 1-Empresa/Persona → `A7Y7vJ`/`nOeaw` 2-Datos (PF/Empresa) → `Y73Bk` 3-Dirección fiscal → `lFJAp` 4-Documentos → `hHln9`/`s2mkk`/`nOx6H` 5-Autenticación → `ksBHp` 7-Éxito. Saldo inicial: `mMBgi`/`E5PSQk`/`DGLHA`/`V6Ve2o` selecciona monto · `oBMuj` Stripe · `Ca9xu`/`Wu5Pa` éxito/error
- **Cotizador nac (G01)**: `HcT3u`/`LQkUq` 1/2 · `MZSBH` 2/2 · `s0l1t` opciones · **LTL (G02)**: `ziw2t`/`v1nOmg`/`ugogO`
- **Nueva guía nac (G03)**: `s8OZqW` opciones · `j0ZVc`/`arq5s`→`bmjY0`→`wtO6f`→`kXdNI`→`v0cKmR` (1/5–5/5) · `c2L4o` nueva dirección · **LTL (G04)**: `cB7Eq`/`Yl8Zn`/`UwN7t`/`O5zImp`/`u2gGw`/`bW7zy`
- **Guías (G05)**: `y7rNA` listado · **Detalle (G06)**: `gpNZx` Datos · `j5VOx`/`aUrlz` Recolección · `k9ODwP`/`Yo3nn`/`Eolov` Actualizaciones · `Y0enh` Admin · `xnUNR` fecha recolección
- **Administración**: `p6KS8` Saldos (A01) · `z7xU0`/`GlXI9`/`G4Gd8` recargar (A02) · `CWx3Z`/`xhyi9`/`i9KImC` Asignaciones (A04/A05) · `Z6tadZ` Facturación + `S8eo0` detalle factura (A06)
- **Soporte (S01)**: `RJpDv` tickets · `P4SBQ`/`L7UDqm` popups · **Direcciones (D01)**: `cDU5S` listado · `XdQno` nueva
- **Reporte (R01)**: `tULsG` (nota "tbd", sin diseño)

### `ADMIN-CLIENTES.pen`

- **Design system**: `hb9Gn` · `Wx95D`. Badges estatus guía: `s3NJnZ` Vigente · `f4BYJt` Recolectada · `mAkeP` En tránsito · `blWFH` Entregada · `Mc6w4` Devolución · `KOBLS` Cancelada
- **Auth (C01/C02)**: `EZpY4`/`XvimB` login · `kD9Un`→`r1V9bl`→`I1Hn5z`→`J0AOKq`
- **Nuevo cliente (C03)**: `NTd4X` paso 1 → `XjDLQ` paso 2 (precios; cards `BIWLv`/`RLWvX`) → `B3YrbL` paso 3 → `dJQWu` éxito
- **Listado**: `bBg93`. **Detalle por tipo** — Datos: `D1mwuu` Consumo / `bArUJ` Prepago / `VuHeh` Catálogo · Consumo: `ZNCo2`/`R1I3xT`/`O7fvy` · `D8DBwx` Facturas · `jFEii`/`TDW7W` Usuarios · `zl3JE` Soporte · `o65eM` Dashboard · `cKnRe` Detalle ticket
- **Recarga/utilización (C04/C05)**: `R0dAa`/`A8BOMn` Saldos · `fsSPB` Panel Recarga · `DK2Lp` Panel Utilización · `x8hgqG`/`htZYL` éxito
- **Asignaciones (C06/C07)**: `n5spq`/`Q4fa4` · `x3eGrv` Nueva · `uKQxV` Detalle · `yUoH6` popup util. · `i1oE5` éxito
- **Factura (C08)**: `CJkde` · `vdGtc` Panel Nueva · `Y3qgkS` Panel Detalle · `w3mDb` éxito
- **Usuario (C09)**: `Lh3ut` Panel Crear
- **Precios (C12–C14)**: `n0SBKM` Tabla-Reglas · `fWyMI` Tabla-Porcentaje · `lPvTT` Porcentaje · `z5gtF` Catálogo

### `ADMIN-GUIAS.pen`

- **Design system**: `D9HqUc` · `hkGVo`
- **Cotizadores (G01–G03)**: `Y7U7Ck`/`e4Yo2`/`UyLjv` + opciones `Zhfeh`(nac)/`A9FCp`(intl)/`ISyKt`(LTL) · **PDF (G04)**: `MOPDt`
- **Listado (G05)**: `rIBq7`
- **Nueva guía**: nac (G06) `W92VnD`+`sAItW`/`t2qKHF`/`Y1tX05`/`e0jOW`/`MVrh0`/`V3Ltu` · intl (G07) `cJy85`+`G8tR0`/`dRC0n`/`JnsOv`/`yRN1M` · LTL (G08) `EqP1D`+`D0mW01`/`O4UHcY`/`RKylC`/`NSLzX`/`qxiFL`
- **Interna**: Guía (G09) `j4X0as`+`m3jhys`/`m1INc`/`O7JMZ` · Servicio (G10) `JInRZ`/`Rt1iF`/`e1bRbr` · **Etiqueta** `pJrIa`
- **Detalle de guía**: `t1ylI` Datos · `NVoX4`/`pLkoN`/`gOYd1` Admin · `TgQHh` Recolección · `mKPsP`/`FPQnv`/`Tww66` Actualizaciones
- **G11–G14**: `MISzJ` popup desglose · `B9TVXU` cargo post-emisión · `S2Squ0` popup actualización · success `cY6P1`/`UX6DM`/`O6uLJ1`

### `ADMIN-REC-TIC-CRM.pen`

- **Design system**: `KN32f` · `exiTH`
- **Recolecciones (R01/R02)**: `UpegA` Solicitudes · `hNxOr` Programar (drawer) · `P0aOZu` Programadas · `xG1wt` Detalle · `fAkQH` Warning · `xzD9d` Delete · `JI28H` éxito
- **Tickets (T01)**: `M37C75` listado · `I4xAC` detalle
- **CRM (K01/K02)**: `SPOeE` Kanban · `kSBob` Lista · `R7uIND` Nuevo prospecto · `lNpCy` éxito · Detalle: `I30TQC` Datos / `uC0kL` Documentos / `pt8em` Notas / `XhZp8` Formulario

### `ADMIN-USER-COMISIONES.pen`

- **Design system**: `J70np` · `Vzz5V`
- **Comisiones (CC02/CC04)**: `qYuTg` Solicitudes · `BdUMJ` Detalle Abono · `vrRh2` Aprobadas
- **Usuarios (U1)**: `Ep8YI` listado · `Y7vzP` Nuevo (drawer) · `qMhRZ` Detalle · `U5Sd8` Success · `d6kjs` Saved · `c2sm8u` Delete

### `ADMIN-ADMIN.pen` (módulo Administración con tabs)

- **Design system**: `Sz4A1` · `tWQ9i`. Reusable extra: `NM8ZB` Prospect Card
- **Tablas de precios (P01–P03)**: `s7FjP` listado · popups `eUa0d`/`I7tgCt`/`o2vBw7` · editores `N9QlW` Reglas / `nQ5h4` Porcentaje / `aO9dQ` Catálogo · `P6NHrU` drawer regla · **P04/P05**: `fyNPa`/`Z0IGg`/`dmWrt`
- **Facturas/Abonos (F01–F04)**: `ag0JJ` Facturas · `MUOkz` Abonos · `wsXsM` Panel Nueva Factura · `a5QvVK`/`XnTat` Panel Detalle · `GRMXp` Ligar abono · `WcCAT` Detalle abono · `bGoJU` popup filtro
- **Auditoría (A01–A06)**: `UtgiI`/`lDalQ` Estafeta · `eF9GF`/`BXeha`/`mM5ZI` T1 · modales `H4MvQj`/`CPfTg` · cargas `g2SxY`/`sM5Ta`/`vtwwL`/`CD62D` · Loading Cards · varios Success
