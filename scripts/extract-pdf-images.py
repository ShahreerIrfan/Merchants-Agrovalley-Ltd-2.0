import fitz
import os

pdf_path = r"C:\Users\USERAS\.gemini\antigravity\brain\56f7ee7e-e1f4-4d17-9176-576a073da7e8\.user_uploaded\media_1795598258765_48be0c5b.pdf"
doc = fitz.open(pdf_path)

base_out = r"D:\Projects\MerchantsArgro\frontend\public\services"

services_config = [
    {
        "folder": "feed-mill",
        "primary_page": 10,
        "primary_idx": 1,
        "lifecycle_page": 11,
        "step_indices": [1, 2, 3, 4, 5]
    },
    {
        "folder": "biogas",
        "primary_page": 12,
        "primary_idx": 1,
        "lifecycle_page": 13,
        "step_indices": [1, 2, 3, 4, 5]
    },
    {
        "folder": "solar",
        "primary_page": 14,
        "primary_idx": 1,
        "lifecycle_page": 15,
        "step_indices": [1, 2, 3, 4, 5]
    },
    {
        "folder": "hatchery",
        "primary_page": 30,
        "primary_idx": 1,
        "lifecycle_page": 31,
        "step_indices": [1, 2, 3, 4, 5]
    }
]

for cfg in services_config:
    folder_path = os.path.join(base_out, cfg["folder"])
    os.makedirs(folder_path, exist_ok=True)
    
    # Extract primary
    p_page = doc[cfg["primary_page"] - 1]
    p_imgs = p_page.get_images(full=True)
    p_xref = p_imgs[cfg["primary_idx"]][0]
    p_data = doc.extract_image(p_xref)
    primary_file = os.path.join(folder_path, "primary.jpg")
    with open(primary_file, "wb") as f:
        f.write(p_data["image"])
    print(f"[{cfg['folder']}] Saved primary.jpg ({p_data['width']}x{p_data['height']})")
    
    # Extract steps 1 to 5
    l_page = doc[cfg["lifecycle_page"] - 1]
    l_imgs = l_page.get_images(full=True)
    for step_num, idx in enumerate(cfg["step_indices"], start=1):
        s_xref = l_imgs[idx][0]
        s_data = doc.extract_image(s_xref)
        step_file = os.path.join(folder_path, f"step{step_num}.jpg")
        with open(step_file, "wb") as f:
            f.write(s_data["image"])
        print(f"[{cfg['folder']}] Saved step{step_num}.jpg ({s_data['width']}x{s_data['height']})")

print("All images extracted successfully!")
